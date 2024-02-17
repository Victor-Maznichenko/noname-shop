import { useState } from "react";

import { useAppSelector } from "@redux/store";

import ModalCart from "@components/Cart/ModalCart";
import Icon from "@components/ui/Icon";

const Cart = () => {
   const { products } = useAppSelector((state) => state.cart);
   const [modalActive, setModalActive] = useState(false);

   const toggleModalActive = () => {
      setModalActive(!modalActive);
   };

   return (
      <div>
         <button
            onClick={toggleModalActive}
            className={`${products.length ? "bg-blue-light text-white" : "bg-white text-blue-light"} relative flex items-center rounded p-1.5 text-m lowercase transition-all`}
            type="button"
         >
            <Icon
               className={`mr-1 transition-all ${products.length ? "fill-white" : "fill-blue-light"}`}
               name="cart"
               width={17}
               height={15}
            />
            <span>Cart</span>
            <span className="absolute bottom-full left-full -translate-x-1/2 translate-y-1/2 rounded-full bg-white px-1.5 py-0.5 text-blue-light transition-all empty:opacity-0">
               {products.length ? products.length : ""}
            </span>
         </button>

         <ModalCart modalActive={modalActive} toggleModalActive={toggleModalActive} />
      </div>
   );
};

export default Cart;
