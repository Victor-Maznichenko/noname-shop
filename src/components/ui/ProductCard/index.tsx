import { useState } from "react";

import { calculateOldPrice } from "@helpers";
import { ProductType } from "@utils/types/models";

import CartBtn from "../Buttons/CartBtn";
import TextBtn from "../Buttons/TextBtn";
import Icon from "../Icon";

import PreviewSlider from "./PreviewSlider";
import Rating from "./Rating";
import Sale from "./Sale";
import ShortDescription from "./ShortDescription";

type Props = {
   product: ProductType;
   className: string;
};

const ProductCard = ({ product, className }: Props) => {
   const [modalActive, setModalActive] = useState(false);
   const toggleModalActive = () => {
      setModalActive(!modalActive);
   };

   const oldPrice = calculateOldPrice(product.price, product.discountPercentage);

   return (
      <div
         className={`${className ?? ""} flex h-full flex-col justify-between bg-gray-light p-4 text-s text-gray-dark`}
      >
         <div className="relative">
            <Sale discountPercentage={product.discountPercentage} />
            <PreviewSlider images={product.images} />
            <Rating className="mb-2" rating={product.rating} />
            <h4 className="mb-2">{product.title}</h4>
            <ShortDescription
               className="mb-2"
               description={product.description}
               toggleModalActive={toggleModalActive}
               limitTruncate={90}
            />

            <div
               className={`${!modalActive ? "pointer-events-none opacity-0" : ""} absolute left-0 top-0 h-full w-full bg-gray-light`}
            >
               <Rating className="mb-2" rating={product.rating} />
               <h4 className="mb-2">{product.title}</h4>
               <p className="text-xs text-gray-main">{product.description}</p>
               <TextBtn onClick={toggleModalActive}>Hide description</TextBtn>
            </div>
         </div>

         <div className="flex items-center">
            <CartBtn className="mr-2 inline-flex items-center rounded p-1 text-s">
               <Icon name="cart" className="mr-1 fill-white text-s" width={20} height={18} />
               <span>${product.price}</span>
            </CartBtn>
            <s className="text-gray-main">${oldPrice}</s>
         </div>
      </div>
   );
};

export default ProductCard;
