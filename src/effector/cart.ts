import { ProductType } from "@types";
import { createEvent, createStore, sample } from "effector";
import persist from "effector-localstorage";

type CartListType = {
  [key: number]: { product: ProductType; quantity: number; totalQuantity: number };
};

// Stores
export const $isCartOpen = createStore<boolean>(false);
export const $cartProducts = createStore<CartListType>({});
export const $totalPrice = createStore<number>(0);
export const $resultCount = createStore<number>(0);

// Events
export const openCart = createEvent();
export const closeCart = createEvent();
export const increaseCount = createEvent<ProductType>();
export const decreaseCount = createEvent<ProductType>();
export const removeFromCart = createEvent<ProductType>();
export const resetCart = createEvent();

$isCartOpen.on(openCart, () => true);
$isCartOpen.on(closeCart, () => false);

//Samples
sample({
  clock: increaseCount,
  fn: (product: ProductType) => {
    const cartProducts = $cartProducts.getState();
    if (!cartProducts[product.id]) {
      cartProducts[product.id] = { product: product, quantity: 1, totalQuantity: 100 };
    } else {
      cartProducts[product.id].quantity++;
    }

    return Object.assign({}, cartProducts);
  },
  target: $cartProducts,
});

sample({
  clock: increaseCount,
  fn: (product: ProductType) => $totalPrice.getState() + product.price,
  target: $totalPrice,
});

sample({
  clock: increaseCount,
  fn: () => $resultCount.getState() + 1,
  target: $resultCount,
});

sample({
  clock: removeFromCart,
  fn: (product: ProductType) =>
    $totalPrice.getState() - product.price * $cartProducts.getState()[product.id].quantity,
  target: $totalPrice,
});

sample({
  clock: removeFromCart,
  fn: (product: ProductType) =>
    $resultCount.getState() - $cartProducts.getState()[product.id].quantity,
  target: $resultCount,
});

sample({
  clock: removeFromCart,
  fn: (product: ProductType) => {
    const cartList = $cartProducts.getState();
    const result: CartListType = {};
    for (const id of Object.keys(cartList)) {
      if (Number.parseInt(id) !== product.id) {
        result[Number.parseInt(id)] = cartList[Number.parseInt(id)];
      }
    }

    return Object.assign({}, result);
  },
  target: $cartProducts,
});

sample({
  clock: decreaseCount,
  fn: (product: ProductType) => {
    const cartList = $cartProducts.getState();
    cartList[product.id].quantity--;
    if (!cartList[product.id].quantity) {
      delete cartList[product.id];
    }

    return Object.assign({}, cartList);
  },
  target: $cartProducts,
});

sample({
  clock: decreaseCount,
  fn: (product: ProductType) => $totalPrice.getState() - product.price,
  target: $totalPrice,
});

sample({
  clock: decreaseCount,
  fn: () => $resultCount.getState() - 1,
  target: $resultCount,
});

sample({
  clock: resetCart,
  fn: () => ({}),
  target: $cartProducts,
});

$totalPrice.reset(resetCart);
$resultCount.reset(resetCart);

persist({
  store: $cartProducts,
  key: "cartList",
});

persist({
  store: $totalPrice,
  key: "resultPrice",
});

persist({
  store: $resultCount,
  key: "resultCount",
});
