'use client';

import React, { useState } from 'react';

import { Card, CardContent } from "@/components/ui/card";

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

export function Menu({ menu = SAMPLE }: { menu?: Menu }) {
  const safeMenu = menu && menu.mealServices ? menu : { mealServices: [] };
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const hasMultipleCourses = safeMenu.mealServices.length > 1;

  return (
    <Card className="max-w-xl mx-auto bg-slate-900 text-white text-sm">
      <CardContent className="p-4">
        <h2 className="text-lg font-medium text-center mb-3">Our Menu</h2>

        {hasMultipleCourses && (
          <div className="flex gap-2 mb-4">
            {safeMenu.mealServices.map((meal, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCourseIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs ${
                  idx === activeCourseIndex
                    ? 'bg-red-500'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {meal.mealServiceType}
              </button>
            ))}
          </div>
        )}

        {safeMenu.mealServices.map((meal, idx) => {
          if (hasMultipleCourses && idx !== activeCourseIndex) return null;

          return (
            <div key={idx} className="space-y-3">
              {!hasMultipleCourses && (
                <h3 className="text-base font-medium mb-2">
                  {meal.mealServiceType}
                </h3>
              )}

              {meal.selectionOptions.map((optionGroup, groupIdx) => (
                <div key={groupIdx} className="space-y-2">
                  {optionGroup.map((item, itemIdx) => (
                    <div key={itemIdx} className="hover:bg-slate-800 p-2 rounded">
                      {item.selectionGuidanceText && (
                        <p className="text-xs italic text-slate-400">
                          {item.selectionGuidanceText}
                        </p>
                      )}
                      {item.separatorAndOr && (
                        <p className="text-xs text-slate-400">
                          {item.separatorAndOr}
                        </p>
                      )}
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-medium">
                          {item.dishName.toUpperCase()}
                        </span>
                        {item.ingredients && (
                          <span className="text-xs text-slate-400 italic">
                            {item.ingredients}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}

        {menu.footerDisclaimer && (
          <div className="mt-4 p-2 bg-slate-800 rounded text-center text-xs">
            {menu.footerDisclaimer}
          </div>
        )}
      </CardContent>
    </Card>
  );
}