'use client';

import { useState } from 'react';

interface Menu {
  mealServices: {
    mealServiceType: string;
    selectionOptions: {
      selectionGuidanceText?: string;
      dishName: string;
      ingredients?: string;
      separatorAndOr?: string;
    }[][];
  }[];
  footerDisclaimer: string;
  isBusiness: boolean;
}

export const SAMPLE: Menu = {
  mealServices: [
    {
      mealServiceType: "...",
      selectionOptions: [
        [
          { dishName: "..." },
        ]
      ],
    },
  ],
  footerDisclaimer: "...",
  isBusiness: false
};

interface MenuProps {
  onTabChange: () => void;
}

export function Menu({
  menu = SAMPLE,
}: {
  menu?: Menu;
}) {
  const safeMenu = menu && menu.mealServices ? menu : { mealServices: [] };

  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const hasMultipleCourses = safeMenu.mealServices.length > 1;

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>

      {hasMultipleCourses && (
        <div className="tabs mb-4">
          {safeMenu.mealServices.map((meal, idx) => (
            <button
              key={idx}
              type="button"
              className={`tab ${idx === activeCourseIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveCourseIndex(idx);
              }}
            >
              {meal.mealServiceType}
            </button>
          ))}
        </div>
      )}

      <div>
        {safeMenu.mealServices.map((meal, idx) => {
          // Only render the active course if tabs are present
          if (hasMultipleCourses && idx !== activeCourseIndex) return null;

          return (
            <div key={idx} className="mb-6">
              {/* Only display the meal title if there are no tabs */}
              {!hasMultipleCourses && (
                <h3 className="text-xl font-semibold mb-2">
                  {meal.mealServiceType}
                </h3>
              )}

              {meal.selectionOptions.map((optionGroup, groupIdx) => (
                <div key={groupIdx}>
                  <ul className="mb-2">
                    {optionGroup.map((item, itemIdx) => (
                      <li key={itemIdx} className="mb-1">
                        {item.selectionGuidanceText && (
                          <span className="italic mb-2">{item.selectionGuidanceText}<br /></span>
                        )}
                        {item.separatorAndOr && (
                          <span>{item.separatorAndOr}<br /></span>
                        )}
                        <span className={`font-${menu.isBusiness ? 'bold' : 'medium'}`}>
                          {item.dishName.toUpperCase()}
                        </span>
                        {item.ingredients && (
                          <span>: {item.ingredients}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="bg-accent p-4 mt-4 rounded-md text-center font-bold">
        {menu.footerDisclaimer ?? null}
      </div>
    </div>
  );
}