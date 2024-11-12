'use client';

interface Menu {
  sections: {
    title: string;
    options: {
      course: string;
      ingredients?: string;
    }[];
  }[];
}

export const SAMPLE = {
  sections: [
    {
      title: "Main Selection",
      options: [
        { course: "...", ingredients: "..." },
        { course: "...", ingredients: "..." },
        { course: "...", ingredients: "..." },
      ],
    },
    {
      title: "Before Landing",
      options: [
        { course: "...", ingredients: "..." },
        { course: "...", ingredients: "..." },
      ],
    },
  ],
};

/*
export const SAMPLE: Menu = {
  sections: [
    {
      title: "Main Selection",
      options: [
        { course: "HUMMUS", },
        { course: "GARDEN FRESH SALAD", },
        {
          course: "BEEF STROGANOFF",
          ingredients: "Sautéed zucchini and red pepper, potatoes gratin",
        },
        { course: "CHOCOLATE TRUFFLE CAKE", },
        {
          course: "NOODLE SALAD WITH CARROT",
        },
        {
          course: "CHICKEN STEW WITH CHESTNUTS",
          ingredients: "Kale, vegetable egg noodle",
        },
        {
          course: "FRUIT & COCONUT MILK SAGO PUDDING",
          ingredients: "",
        },
      ],
    },
    {
      title: "Before Landing",
      options: [
        { course: "SEASONAL FRESH FRUITS", },
        { course: "SELECTION OF CHEESE", },
        {
          course: "OMELETTE",
          ingredients: "Sautéed potatoes and broccoli, grilled tomato",
        },
        {
          course: "EDAMAME SALAD WITH CARROT & DRIED TURNIP",
        },
        { course: "CONGEE WITH BEEF", },
        { course: "Butter / Bread", },
      ],
    },
  ],
};
*/

export function Menu({
  menu = SAMPLE,
}: {
  menu?: Menu;
}) {
  // Ensure menu has a default structure if it's undefined
  const safeMenu = menu && menu.sections ? menu : { sections: [] };

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      {safeMenu.sections.map((section, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
          <ul>
            {section.options.map((item, index) => (
              <li key={index} className="mb-1">
                <span className="font-medium">{item.course}:</span> {item.ingredients}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-accent p-4 mt-4 rounded-md text-center font-bold">
        Barlas
      </div>
    </div>
  );
}
