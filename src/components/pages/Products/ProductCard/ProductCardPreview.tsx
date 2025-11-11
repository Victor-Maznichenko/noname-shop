import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Condition } from "@components/ui";

interface ProductCardPreviewProps {
  images: string[];
}

export const ProductCardPreview = ({ images }: ProductCardPreviewProps) => {
  if (!images || images.length === 0) {
    return <div className="bg-gray-200 h-72 w-full" aria-hidden="true" />;
  }

  return (
    <Condition
      value={images.length > 1}
      then={
        <Swiper className="pb-3 hover:cursor-grabbing" pagination={true} modules={[Pagination]}>
          {images.map(image => (
            <SwiperSlide className="h-72 w-full" key={image} style={{ width: "auto" }}>
              <img src={image} className="h-72 w-full object-contain object-center" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      }
      else={<img className="h-72 w-full object-contain object-center" src={images[0]} loading="lazy" />}
    />
  );
};
