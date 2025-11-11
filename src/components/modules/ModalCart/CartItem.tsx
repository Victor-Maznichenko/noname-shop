import { memo, useState } from "react";

import { cn } from "@helpers";
import {
  decrementQuantityProduct,
  incrementQuantityProduct,
  removeFromCart,
} from "@redux/reducers/cartReducer";
import { useAppDispatch } from "@redux/store";

import { Counter, Icons } from "@components/ui";

export const CartItem = memo(({ id, quantity, thumbnail, title, price }: ProductCart) => {
  const dispatch = useAppDispatch();
  const [isRemove, setIsRemove] = useState(false);
  const incrementValue = () => dispatch(incrementQuantityProduct(id));
  const decrementValue = () => (quantity > 1 ? dispatch(decrementQuantityProduct(id)) : setIsRemove(true));

  return (
    <li className="relative mb-4 flex w-full justify-between gap-x-2 overflow-hidden align-top last:mb-0">
      <img className="h-[3.75rem] w-[3.75rem] rounded bg-red" src={thumbnail} alt={title} />
      <div className="grow">
        <h4 className="mb-2 text-s">{title}</h4>
        <Counter value={quantity} incrementValue={incrementValue} decrementValue={decrementValue} />
      </div>
      <span>${price}</span>

      <div
        className={cn(
          `absolute left-0 top-0 flex h-full w-full items-center justify-center bg-red text-white
          transition-transform duration-300`,
          isRemove ? "translate-x-0" : "translate-x-full"
        )}
        onTransitionEnd={() => setTimeout(() => dispatch(removeFromCart(id)), 100)}
      >
        <Icons.Trash className="mr-2" />
        <span>product has been delete</span>
      </div>
    </li>
  );
});

CartItem.displayName = "CartItem";
