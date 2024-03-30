import { useUnit } from "effector-react";
import { useEffect } from "react";

import { $isCartOpen, $productsCart, $totalPrice, closeCart } from "@/effector/cart";

import CartItems from "@components/Cart/CartItems";
import CartBtn from "@components/ui/Buttons/CartBtn";
import CloseBtn from "@components/ui/Buttons/CloseBtn";
import Icon from "@components/ui/Icon";

const ModalCart = () => {
  const [productsCartObj, totalPrice, isCartOpen] = useUnit([$productsCart, $totalPrice, $isCartOpen]);
  console.log(totalPrice);
  const productsCart = Object.values(productsCartObj);

  const handleClick = () => closeCart();

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
          <CloseBtn onClick={handleClick} />
        </div>
        <CartItems products={productsCart} className="grow" />
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs">{productsCart.length} positions</span>
          <span className="text-xl text-gray-dark">${totalPrice}</span>
        </div>
        {productsCart.length === 0 ? (
          <CartBtn onClick={handleClick}>back to products</CartBtn>
        ) : (
          <CartBtn>place an order</CartBtn>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
