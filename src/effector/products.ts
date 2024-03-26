import { ProductType } from "@types";
import { createEffect, createEvent, createStore, sample } from "effector";

import { getProducts, getProductsByCategory, getProductsBySearch } from "../api/productsApi";

import { $currentCategory } from "./categories";
// import { setError } from "./error";

export enum FetchType {
  ALL,
  CATEGORY,
  SEARCH,
}

export const $typeOfFetching = createStore<FetchType>(FetchType.ALL);
export const $searchValue = createStore<string>("");
export const $products = createStore<ProductType[]>([]);
export const $limit = createStore<number>(10);
export const $page = createStore<number>(0);
export const $isAllowFetch = createStore<boolean>(true);

export const updateTypeOfFetching = createEvent<FetchType>();
export const updateSearchValue = createEvent<string>("");
export const nextPage = createEvent();

export const updateProductsFx = createEffect(async () => {
  const skip = $page.getState() * $limit.getState();

  switch ($typeOfFetching.getState()) {
    case FetchType.CATEGORY:
      return await getProductsByCategory($currentCategory.getState(), $limit.getState(), skip);
    case FetchType.SEARCH:
      return await getProductsBySearch($searchValue.getState(), $limit.getState(), skip);
    default:
      return await getProducts($limit.getState(), skip);
  }
});

sample({
  clock: updateTypeOfFetching,
  fn: type => type,
  target: $typeOfFetching,
});

sample({
  clock: updateSearchValue,
  fn: value => value,
  target: $searchValue,
});

sample({
  source: $currentCategory,
  fn: category => (category === "all" ? FetchType.ALL : FetchType.CATEGORY),
  target: $typeOfFetching,
});

sample({
  clock: [$typeOfFetching, $searchValue, $currentCategory, $page],
  target: updateProductsFx,
});

// Отменить изменение соостояния и дальнейший fetch если пришло сколько же продуктов сколько у нас уже есть.
sample({
  clock: updateProductsFx.doneData,
  fn: data => [...$products.getState(), ...data.products],
  target: $products,
});
// doneData failData
// если убрать .doneData то будет выполняться во время pending  Обычно без указания метода используется

sample({
  clock: updateProductsFx.doneData,
  filter: data => !data.products.length,
  fn: data => !!data.products.length,
  target: $isAllowFetch,
});

sample({
  clock: nextPage,
  filter: () => $isAllowFetch.getState(),
  fn: () => $page.getState() + 1,
  target: $page,
});

// sample({
//   clock: updateProducts.fail,
//   fn: () => "При загрузке товаров произошла ошибка, повторите запрос.",
//   target: setError,
// });

$products.reset([$currentCategory, $searchValue, $typeOfFetching]);
$limit.reset([$currentCategory, $searchValue, $typeOfFetching]);
$page.reset([$currentCategory, $searchValue, $typeOfFetching]);

// Если локально event
// Если на сервер effect
// event меняет store потом вызывает effect который отправляет данные на сервер, и сравниваем изменения и делаем коррективы или оставляю как есть
