import { ProductCartType, ProductType } from "@types";
import { createEvent, createStore, sample } from "effector";
import persist from "effector-localstorage";

interface ProductsCart {
  [key: number]: ProductCartType;
}

// Stores
export const $totalPrice = createStore<number>(0);
export const $isCartOpen = createStore<boolean>(false);
export const $isAnimRemove = createStore<boolean>(false);
export const $productsCart = createStore<ProductsCart>({});

// Events
export const openCart = createEvent();
export const closeCart = createEvent();
export const addToCart = createEvent<ProductType>();
export const removeFromCart = createEvent<number>();
export const incrementQuantity = createEvent<number>();
export const decrementQuantity = createEvent<number>();

//Samples
sample({
  clock: addToCart,
  source: $productsCart,
  filter: (productsCart, product) => {
    const productCart = productsCart[product.id];
    const isNotAviable = !(productCart?.totalQuantity >= productCart?.quantity);
    return !productCart && isNotAviable;
  },
  fn: (productsCart, product) => {
    if (productsCart[product.id]) {
      productsCart[product.id].quantity++;
      return structuredClone(productsCart);
    }

    const productCart = {
      ...product,
      quantity: 1,
      totalQuantity: 100,
    };

    return { ...productsCart, [productCart.id]: productCart };
  },
  target: $productsCart,
});

sample({
  clock: incrementQuantity,
  source: $productsCart,
  filter: (productsCart, id) => {
    const productCart = productsCart[id];
    const isAviable = productCart.totalQuantity >= productCart.quantity;
    return productCart && isAviable;
  },
  fn: (productsCart, id) => {
    productsCart[id].quantity++;
    return structuredClone(productsCart);
  },
  target: $productsCart,
});

sample({
  clock: removeFromCart,
  source: $productsCart,
  filter: (productsCart, id) => !!productsCart[id],
  fn: (productsCart, id) => {
    delete productsCart[id];
    return structuredClone(productsCart);
  },
  target: $productsCart,
});

sample({
  clock: decrementQuantity,
  source: $productsCart,
  filter: (productsCart, id) => {
    const productCart = productsCart[id];
    return productCart && productCart.quantity > 1;
  },
  fn: (productsCart, id) => {
    productsCart[id].quantity--;
    return structuredClone(productsCart);
  },
  target: $productsCart,
});

sample({
  clock: $productsCart,
  fn: productsCartObj => {
    const productsCart = Object.values(productsCartObj);
    const totalPrice = productsCart.reduce((sum, { price, quantity }) => sum + quantity * price, 0);
    return totalPrice;
  },
  target: $totalPrice,
});

$isCartOpen.on(openCart, () => true);
$isCartOpen.on(closeCart, () => false);

persist({
  store: $productsCart,
  key: "productsCart",
});

persist({
  store: $totalPrice,
  key: "totalPrice",
});
