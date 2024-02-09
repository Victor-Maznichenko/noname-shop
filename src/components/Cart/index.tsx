import { useState } from "react";

import { ProductCartType } from "@utils/types/models";

import CartBtn from "@components/ui/Buttons/CartBtn";

import CloseBtn from "../ui/Buttons/CloseBtn";
import Icon from "../ui/Icon";

import CartItems from "./CartItems";

const Cart = () => {
   const [modalActive, setModalActive] = useState(false);

   const toggleModalActive = () => {
      setModalActive(!modalActive);
   };

   const products: Array<ProductCartType> = [
      {
         id: 59,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 1,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 2,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 3,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 4,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 5,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 6,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 7,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      },
      {
         id: 8,
         title: "Spring and summershoes",
         price: 20,
         quantity: 3,
         total: 60,
         discountPercentage: 8.71,
         discountedPrice: 55,
         thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      }
   ];

   return (
      <div>
         <button
            onClick={toggleModalActive}
            className="flex items-center rounded bg-white p-1.5 text-m lowercase text-blue-light"
            type="button"
         >
            <Icon className="mr-1 fill-blue-light" name="cart" width={17} height={15} />
            <span>Cart</span>
         </button>

         <div
            className={`${!modalActive ? "pointer-events-none opacity-0" : ""} absolute left-0 top-0 z-50 h-screen min-h-[430px] w-full bg-gray-light/85 transition-all duration-500`}
         >
            <div
               className={`${!modalActive ? "translate-x-full" : ""} bg absolute right-0 top-0 flex h-full	w-full max-w-80 flex-col bg-white px-5 py-6 transition-all duration-500`}
            >
               <div className="flex items-center justify-between">
                  <div className="flex items-center text-m lowercase text-blue-light">
                     <Icon className="mr-1 fill-blue-light" name="cart" width={17} height={15} />
                     <span>Cart</span>
                  </div>
                  <CloseBtn onClick={toggleModalActive} />
               </div>
               <CartItems products={products} className="grow" />
               <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs">4 positions</span>
                  <span className="text-xl text-gray-dark">$2196</span>
               </div>
               {products.length === 0 ? (
                  <CartBtn onClick={toggleModalActive}>back to products</CartBtn>
               ) : (
                  <CartBtn>place an order</CartBtn>
               )}
            </div>
         </div>
      </div>
   );
};

export default Cart;
