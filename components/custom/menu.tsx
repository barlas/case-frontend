'use client';

import cx from 'classnames';
import { format, isWithinInterval } from 'date-fns';
import { useEffect, useState } from 'react';

interface Menu {
  sections: {
    title: string;
    options: {
      course: string;
      ingredients?: string;
    }[];
  }[];
}

const SAMPLE: Menu = {
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


export function Menu({
  menu = SAMPLE,
}: {
  menu?: Menu;
}) {
  return (
    <div></div>
  );
}
