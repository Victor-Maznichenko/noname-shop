import { createEffect, createEvent, createStore, sample } from "effector";

import { getCategories } from "@/api/categoriesApi";

// Stores
export const $currentCategory = createStore<string>("all");
export const $categories = createStore<string[]>([]);

// Effects
export const getCategoriesFx = createEffect(async () => await getCategories());

// Events
export const changeCurrentCategory = createEvent<string>();

//Samples
sample({
  clock: getCategoriesFx.doneData,
  fn: data => ["all", ...data],
  target: $categories,
});

sample({
  clock: changeCurrentCategory,
  target: $currentCategory,
});
