import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PreviewSlider = ({ images }: { images: Array<string> }) =>
   images.length > 1 ? (
      <Swiper className="pb-3" pagination={true} modules={[Pagination]}>
         {images.map((image, index) => (
            <SwiperSlide
               className="flex h-72 w-full items-center justify-center"
               key={index}
               style={{ width: "auto" }}
            >
               <img className="max-h-full max-w-full" src={image} alt="" />
            </SwiperSlide>
         ))}
      </Swiper>
   ) : (
      <img className="h-72 w-full" src={images[0]} loading="lazy" alt="" />
   );

export default PreviewSlider;
