import { ProductCartType } from "@types";
import { useState } from "react";

import { decrementQuantity, incrementQuantity, removeFromCart } from "@/effector/cart";

import Counter from "@components/ui/Counter";
import Icon from "@components/ui/Icon";

const CartItem = ({ product }: { product: ProductCartType }) => {
  const [isRemove, setIsRemove] = useState(false);
  const incrementValue = () => incrementQuantity(product.id);
  const decrementValue = () => {
    if (product.quantity === 1) {
      setIsRemove(true);
      setTimeout(() => removeFromCart(product.id), 650);
    }
    decrementQuantity(product.id);
  };

  return (
    <li className="relative mb-4 flex w-full justify-between gap-x-2 overflow-hidden align-top last:mb-0">
      <img className="h-[3.75rem] w-[3.75rem] rounded bg-red" src={product.thumbnail} alt={product.title} />
      <div className="grow">
        <h4 className="mb-2 text-s">{product.title}</h4>
        <Counter value={product.quantity} incrementValue={incrementValue} decrementValue={decrementValue} />
      </div>
      <span>${product.price}</span>

      <div
        // eslint-disable-next-line max-len
        className={`${isRemove ? "translate-x-0" : "translate-x-full"} absolute left-0 top-0 flex h-full w-full items-center justify-center bg-red text-white transition-all`}
      >
        <Icon className="mr-2 fill-white" width={12.5} height={14} name="trashcan" />
        <span>product has been delete</span>
      </div>
    </li>
  );
};

export default CartItem;
