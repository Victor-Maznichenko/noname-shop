import { ProductCartType } from "@utils/types/models";

import Counter from "@components/ui/Counter";

const CartItem = ({ product }: { product: ProductCartType }) => (
   <li className="mb-4 flex w-full justify-between gap-x-2 align-top last:mb-0">
      <img className="h-[3.75rem] w-[3.75rem] rounded bg-red" src={product.thumbnail} alt={product.title} />
      <div className="grow">
         <h4 className="mb-2 text-s">Apple iPhone 9</h4>
         <Counter num={product.quantity} maxNum={product.total} />
      </div>
      <span>$549</span>
   </li>
);

export default CartItem;
