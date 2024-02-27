import { ProductCartType } from "@utils/types/models";

import CartItem from "@components/Cart/CartItem";

interface CartItemsType {
  className: string;
  products: Array<ProductCartType>;
}

const CartItems = ({ className, products }: CartItemsType) => (
  <div className={`${className ?? ""} scrollbar-mini mb-11 mr-[-1rem] mt-9 overflow-y-auto pr-1`}>
    {products.length === 0 ? (
      <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">cart is empty :(</span>
    ) : (
      products.map(product => <CartItem product={product} key={product.id} />)
    )}
  </div>
);

export default CartItems;
