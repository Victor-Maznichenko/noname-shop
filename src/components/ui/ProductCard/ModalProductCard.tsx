import { ProductType } from "@types";

import TextBtn from "@components/ui/Buttons/TextBtn";
import Rating from "@components/ui/ProductCard/Rating";

type Props = {
   modalActive: boolean;
   toggleModalActive: () => void;
   product: ProductType;
};

const ModalProductCard = ({ modalActive, toggleModalActive, product }: Props) => (
   <div
      className={`${!modalActive ? "pointer-events-none opacity-0" : ""} absolute left-0 top-0 z-10 h-full w-full bg-gray-light transition-all duration-300`}
   >
      <Rating className="mb-2" rating={product.rating} />
      <h4 className="mb-2">{product.title}</h4>
      <p className="text-xs text-gray-main">{product.description}</p>
      <TextBtn onClick={toggleModalActive}>Hide description</TextBtn>
   </div>
);

export default ModalProductCard;
