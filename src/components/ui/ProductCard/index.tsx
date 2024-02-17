import { useState } from "react";

import { calculateOldPrice } from "@helpers";
import { addToCart } from "@redux/reducers/cartReducer";
import { useAppDispatch } from "@redux/store";
import { ProductType } from "@utils/types/models";

import CartBtn from "../Buttons/CartBtn";
import Icon from "../Icon";

import ModalProductCard from "./ModalProductCard";
import PreviewSlider from "./PreviewSlider";
import Rating from "./Rating";
import Sale from "./Sale";
import ShortDescription from "./ShortDescription";

type Props = {
   product: ProductType;
   className: string;
};

const ProductCard = ({ product, className }: Props) => {
   const dispatch = useAppDispatch();
   const [modalActive, setModalActive] = useState(false);

   const toggleModalActive = () => setModalActive(!modalActive);
   const handleClick = () => dispatch(addToCart(product));

   return (
      <div
         className={`${className ?? ""} flex h-full flex-col justify-between bg-gray-light p-1 text-s text-gray-dark sm:p-4`}
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

            <ModalProductCard
               product={product}
               modalActive={modalActive}
               toggleModalActive={toggleModalActive}
            />
         </div>

         <div className="flex items-center">
            <CartBtn className="mr-2 inline-flex items-center rounded p-1 text-s" onClick={handleClick}>
               <Icon name="cart" className="mr-1 fill-white text-s" width={20} height={18} />
               <span>${product.price}</span>
            </CartBtn>
            <s className="text-gray-main">${calculateOldPrice(product.price, product.discountPercentage)}</s>
         </div>
      </div>
   );
};

export default ProductCard;
