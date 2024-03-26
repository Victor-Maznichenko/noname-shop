import { useUnit } from "effector-react";
import { useEffect } from "react";

import { $isCartOpen, closeCart } from "@/effector/cart";
import { $products } from "@/effector/products";

import CartItems from "@components/Cart/CartItems";
import CartBtn from "@components/ui/Buttons/CartBtn";
import CloseBtn from "@components/ui/Buttons/CloseBtn";
import Icon from "@components/ui/Icon";

const ModalCart = () => {
  const products = useUnit($products);
  const closeCartEvent = useUnit(closeCart);
  const isCartOpen = useUnit($isCartOpen);

  useEffect(() => {
    if (isCartOpen) document.body.style.overflowY = "hidden";
    else {
      document.body.style.overflowY = "auto";
    }
  }, [isCartOpen]);

  return (
    <div
      // eslint-disable-next-line max-len
      className={`${!isCartOpen ? "pointer-events-none opacity-0" : ""} fixed left-0 top-0 z-50 h-screen min-h-[430px] w-full bg-gray-light/85 transition-all duration-500`}
    >
      <div
        // eslint-disable-next-line max-len
        className={`${!isCartOpen ? "translate-x-full" : ""} bg absolute right-0 top-0 flex h-full	w-full max-w-80 flex-col bg-white px-5 py-6 transition-all duration-500`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center text-m lowercase text-blue-light">
            <Icon className="mr-1 fill-blue-light" name="cart" width={17} height={15} />
            <span>Cart</span>
          </div>
          <CloseBtn onClick={closeCartEvent} />
        </div>
        <CartItems products={products} className="grow" />
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs">{products.length} positions</span>
          <span className="text-xl text-gray-dark">${totalPrice}</span>
        </div>
        {products.length === 0 ? (
          <CartBtn onClick={toggleCartActive}>back to products</CartBtn>
        ) : (
          <CartBtn>place an order</CartBtn>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
