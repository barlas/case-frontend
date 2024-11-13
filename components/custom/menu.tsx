'use client';

import { useState } from 'react';

interface Menu {
  courses: {
    title: string;
    description: string;
    options: {
      dish: string;
      ingredients?: string;
    }[][];
  }[];
  disclaimer: string;
  isBusiness: boolean;
}

export const SAMPLE: Menu = {
  courses: [
    {
      title: "...",
      description: "...",
      options: [
        [
          { dish: "...", ingredients: "..." },
          { dish: "...", ingredients: "..." },
          { dish: "...", ingredients: "..." },
        ]
      ],
    },
  ],
  disclaimer: "...",
  isBusiness: false
};

export function Menu({
  menu = SAMPLE,
}: {
  menu?: Menu;
}) {
  // Ensure menu has a default structure if it's undefined
  const safeMenu = menu && menu.courses ? menu : { courses: [] };

  // State to keep track of the active course (tab)
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  // Check if there are multiple courses to determine if tabs are needed
  const hasMultipleCourses = safeMenu.courses.length > 1;

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>

      {hasMultipleCourses && (
        <div className="tabs mb-4">
          {safeMenu.courses.map((course, idx) => (
            <button
              key={idx}
              className={`tab ${idx === activeCourseIndex ? 'active' : ''}`}
              onClick={() => setActiveCourseIndex(idx)}
            >
              {course.title}
            </button>
          ))}
        </div>
      )}

      {/* Display content based on the active course */}
      <div>
        {safeMenu.courses.map((course, idx) => {
          // Only render the active course if tabs are present
          if (hasMultipleCourses && idx !== activeCourseIndex) return null;

          return (
            <div key={idx} className="mb-6">
              {/* Only display the course title if there are no tabs */}
              {!hasMultipleCourses && (
                <h3 className="text-xl font-semibold mb-2">
                  {course.title}
                </h3>
              )}
              <p className="italic mb-2">{course.description}</p>

              {course.options.map((optionGroup, groupIdx) => (
                <div key={groupIdx}>
                  <ul className="mb-2">
                    {optionGroup.map((item, itemIdx) => (
                      <li key={itemIdx} className="mb-1">
                        <span className={`font-${menu.isBusiness ? 'bold' : 'medium'}`}>
                          {item.dish.toUpperCase()}
                        </span>
                        {item.ingredients && (
                          <span>: {item.ingredients}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* Add "or" between primary and alternative options */}
                  {groupIdx === 0 && course.options.length > 1 && (
                    <p className="text-center font-semibold my-2">or</p>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="bg-accent p-4 mt-4 rounded-md text-center font-bold">
        {menu.disclaimer ?? null}
      </div>
    </div>
  );
}