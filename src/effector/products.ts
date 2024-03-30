import { ProductType } from "@types";
import { attach, createEvent, createStore, sample } from "effector";
import { debounce, reset } from "patronum";

import * as api from "@/api/productsApi.ts";
import { $currentCategory } from "@/effector/categories";

export enum FetchType {
  ALL,
  CATEGORY,
  SEARCH,
}

// Stores
export const $page = createStore(0);
export const $limit = createStore(8);
export const $products = createStore<ProductType[]>([]);
export const $error = createStore<string | null>(null);

export const $fetchType = createStore(FetchType.ALL);
export const $searchValue = createStore("");

// Events
export const nextPage = createEvent();
export const clearSearchValue = createEvent();
export const updateSearchValue = createEvent<string>();
export const debouncedUpdateSearchValue = debounce(updateSearchValue, 500);

// Effects
export const getProductsFx = attach({
  source: {
    fetchType: $fetchType,
    category: $currentCategory,
    searchTerm: $searchValue,
    limit: $limit,
    page: $page,
  },
  async effect(source) {
    return api.getProductsFx(source);
  },
});

// Samples
sample({
  clock: getProductsFx.doneData,
  source: $products,
  fn: (source, clock) => [...source, ...clock.products],
  target: $products,
});

sample({
  clock: nextPage,
  source: $page,
  fn: page => page + 1,
  target: $page,
});

sample({
  clock: [$fetchType, $currentCategory, $page],
  target: getProductsFx,
});

sample({
  clock: updateSearchValue,
  target: $searchValue,
});

sample({
  clock: debouncedUpdateSearchValue,
  source: $searchValue,
  fn: searchValue => (searchValue.length > 3 ? FetchType.SEARCH : FetchType.ALL),
  target: $fetchType,
});

sample({
  clock: clearSearchValue,
  fn: () => "",
  target: $searchValue,
});

sample({
  clock: clearSearchValue,
  fn: () => FetchType.ALL,
  target: $fetchType,
});

sample({
  clock: $currentCategory,
  fn: category => (category === "all" ? FetchType.ALL : FetchType.CATEGORY),
  target: $fetchType,
});

// Reset
reset({
  clock: [$currentCategory, $fetchType],
  target: [$products, $page],
});
