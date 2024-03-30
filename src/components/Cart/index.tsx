import { useUnit } from "effector-react";

import { $productsCart, openCart } from "@/effector/cart";

import Icon from "@components/ui/Icon";

const Cart = () => {
  const productsCart = Object.values(useUnit($productsCart));

  return (
    <div>
      <button
        onClick={() => openCart()}
        // eslint-disable-next-line max-len
        className={`${productsCart.length ? "bg-blue-light text-white" : "bg-white text-blue-light"} relative flex items-center rounded p-1.5 text-m lowercase transition-all`}
        type="button"
      >
        <Icon
          className={`mr-1 transition-all ${productsCart.length ? "fill-white" : "fill-blue-light"}`}
          name="cart"
          width={17}
          height={15}
        />
        <span>Cart</span>
        <span
          // eslint-disable-next-line max-len
          className="absolute bottom-full left-full -translate-x-1/2 translate-y-1/2 rounded-full bg-white px-1.5 py-0.5 text-blue-light transition-all empty:opacity-0"
        >
          {productsCart.length ? productsCart.length : ""}
        </span>
      </button>
    </div>
  );
};

export default Cart;
