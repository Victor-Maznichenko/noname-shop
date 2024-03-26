import { createEffect, createEvent, createStore, sample } from "effector";

import { getCategories } from "../api/categoriesApi";

// Stores
export const $currentCategory = createStore<string>("all");
export const $categories = createStore<string[]>([]);

// Events
export const updateCategory = createEvent<string | null>();

// Effects
export const updateCategoriesFx = createEffect(async () => await getCategories());

//Samples
sample({
  clock: updateCategoriesFx.doneData,
  fn: data => ["all", ...data],
  target: $categories,
});

sample({
  clock: updateCategory,
  fn: category => (category ? category : "all"),
  target: $currentCategory,
});
