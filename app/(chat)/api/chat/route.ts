import {
  convertToCoreMessages,
  Message,
  StreamData,
  streamText
} from 'ai';
import { z } from 'zod';

import { customModel } from '@/ai';
import { models } from '@/ai/models';
import { systemPrompt } from '@/ai/prompts';
import { auth } from '@/app/(auth)/auth';
import {
  deleteChatById,
  getChatById,
  saveChat,
  saveMessages
} from '@/db/queries';
import {
  generateUUID,
  getMostRecentUserMessage,
  sanitizeResponseMessages,
} from '@/lib/utils';

import { generateTitleFromUserMessage } from '../../actions';


export const maxDuration = 60;

type AllowedTools =
  | 'getWeather';
  // | 'getMenu';

const weatherTools: AllowedTools[] = ['getWeather'];
// const menuTools: AllowedTools[] = ['getMenu'];

const allTools: AllowedTools[] = [...weatherTools/*, ...menuTools*/];

export async function POST(request: Request) {
  const {
    id,
    messages,
    modelId,
  }: { id: string; messages: Array<Message>; modelId: string } =
    await request.json();

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  const model = models.find((model) => model.id === modelId);

  if (!model) {
    return new Response('Model not found', { status: 404 });
  }

  const coreMessages = convertToCoreMessages(messages);
  const userMessage = getMostRecentUserMessage(coreMessages);

  if (!userMessage) {
    return new Response('No user message found', { status: 400 });
  }

  const chat = await getChatById({ id });

  if (!chat) {
    const title = await generateTitleFromUserMessage({ message: userMessage });
    await saveChat({ id, userId: session.user.id, title });
  }

  await saveMessages({
    messages: [
      { ...userMessage, id: generateUUID(), createdAt: new Date(), chatId: id },
    ],
  });

  const streamingData = new StreamData();

  const result = await streamText({
    model: customModel(model.apiIdentifier),
    system: systemPrompt,
    messages: coreMessages,
    maxSteps: 5,
    experimental_activeTools: allTools,
    tools: {
      /*
      getMenu: {
        description: 'Extract menu items from an uploaded image of a meal menu',
        parameters: z.object({
          imageUrl: z.string().describe('The URL of the menu image'),
        }),
        execute: async ({ imageUrl }) => {
          console.log("Entering getMenu function");
          try {
            if (imageUrl) {
              console.log("Received image URL:", imageUrl);
      
              // Fetch the image data from the URL
              const response = await fetch(imageUrl);
              const arrayBuffer = await response.arrayBuffer();
              const buffer = Buffer.from(arrayBuffer);
              const base64Image = buffer.toString('base64');
              const imageContent = `data:${response.headers.get('content-type')};base64,${base64Image}`;
      
              console.log("Image content fetched and converted to base64.");
      
              // Proceed with your existing logic using imageContent
              const prompt = `
                Please analyze the menu and convert the content to JSON with the following structure:
        
                {
                  "sections": [
                    {
                      "title": "Section Title",
                      "options": [
                        { "course": "Course Name", "ingredients": "Ingredients (optional)" },
                        ...
                      ]
                    },
                    ...
                  ]
                }
        
                Provide only the JSON data as output, without any additional text.
                Don't include ingredients if it doesn't exists.
      
                Image data:
                ${imageContent}
              `;
      
              const { fullStream } = await streamText({
                model: customModel('gpt-4'),
                messages: [{ role: 'user', content: prompt }],
              });
      
              let content = '';
      
              for await (const delta of fullStream) {
                if (delta.type === 'text-delta') {
                  content += delta.textDelta;
                }
              }
      
              try {
                const parsedData = JSON.parse(content.trim());
                return parsedData;
              } catch (e) {
                console.error('Failed to parse JSON from GPT-4 response:', e);
                return { error: 'Failed to parse JSON from GPT-4 response' };
              }
            } else {
              console.warn("No image URL received.");
              return {
                error: "No image URL provided. Please upload a valid image.",
              };
            }
          } catch (error) {
            console.error("Error in getMenu function:", error);
            return {
              error: "An error occurred in getMenu. Could not process the image.",
            };
          }
        },
      },
      */
      getWeather: {
        description: 'Get the current weather at a location',
        parameters: z.object({
          latitude: z.number(),
          longitude: z.number(),
        }),
        execute: async ({ latitude, longitude }) => {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto`
          );

          const weatherData = await response.json();
          return weatherData;
        },
      },
    },
    onFinish: async ({ responseMessages }) => {
      if (session.user && session.user.id) {
        try {
          const responseMessagesWithoutIncompleteToolCalls =
            sanitizeResponseMessages(responseMessages);

          await saveMessages({
            messages: responseMessagesWithoutIncompleteToolCalls.map(
              (message) => {
                const messageId = generateUUID();

                if (message.role === 'assistant') {
                  streamingData.appendMessageAnnotation({
                    messageIdFromServer: messageId,
                  });
                }

                return {
                  id: messageId,
                  chatId: id,
                  role: message.role,
                  content: message.content,
                  createdAt: new Date(),
                };
              }
            ),
          });
        } catch (error) {
          console.error('Failed to save chat');
        }
      }

      streamingData.close();
    },
    experimental_telemetry: {
      isEnabled: true,
      functionId: 'stream-text',
    },
  });

  return result.toDataStreamResponse({
    data: streamingData,
  });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response('Not Found', { status: 404 });
  }

  const session = await auth();

  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const chat = await getChatById({ id });

    if (chat.userId !== session.user.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    await deleteChatById({ id });

    return new Response('Chat deleted', { status: 200 });
  } catch (error) {
    return new Response('An error occurred while processing your request', {
      status: 500,
    });
  }
}
