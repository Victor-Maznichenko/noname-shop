import { cn } from "@helpers";

import { Condition } from "@components/ui";

import { CartItem } from "./CartItem";

interface CartListProps {
  className: string;
  products: Array<ProductCart>;
}

export const CartList = ({ className, products }: CartListProps) => (
  <div className={cn("scrollbar-mini mb-11 mr-[-1rem] mt-9 overflow-y-auto pr-1", className)}>
    <Condition
      value={products.length}
      then={
        <>
          {products.map(product => (
            <CartItem {...product} key={product.id} />
          ))}
        </>
      }
      else={
        <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
          cart is empty :(
        </span>
      }
    />
  </div>
);
