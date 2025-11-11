import { useEffect } from "react";

import { cn, formatCurrency } from "@helpers";
import { setCartClose } from "@redux/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Condition, Button, Icons } from "@components/ui";

import { CartList } from "./CartList";

export const ModalCart = () => {
  const dispatch = useAppDispatch();
  const { products, totalPrice, isCartOpen } = useAppSelector(state => state.cart);
  const closeModalCart = () => dispatch(setCartClose());

  useEffect(() => {
    document.body.style.overflowY = isCartOpen ? "hidden" : "auto";
  }, [isCartOpen]);

  return (
    <div
      className={cn(
        !isCartOpen && "pointer-events-none opacity-0",
        "fixed left-0 top-0 z-50 h-screen min-h-[430px] w-full bg-gray-light/85 transition-all duration-500"
      )}
    >
      <div
        className={cn(
          !isCartOpen && "translate-x-full",
          `bg absolute right-0 top-0 flex h-full w-full max-w-80 flex-col bg-white px-5 py-6 transition-all
          duration-500`
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1 text-m lowercase text-blue-light">
            <Icons.Cart />
            <span>Cart</span>
          </div>
          <Button variant="unstyled" onClick={closeModalCart}>
            <Icons.Close />
          </Button>
        </div>

        <CartList className="grow" products={products} />

        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs">{products.length} positions</span>
          <span className="text-xl text-gray-dark">{formatCurrency(totalPrice)}</span>
        </div>

        <Condition
          value={!products.length}
          then={
            <Button variant="filled-lg-blue" onClick={closeModalCart}>
              back to products
            </Button>
          }
          else={<Button variant="filled-lg-blue">place an order</Button>}
        />
      </div>
    </div>
  );
};
