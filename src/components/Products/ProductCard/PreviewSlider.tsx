import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PreviewSlider = ({ images }: { images: Array<string> }) =>
  images.length > 1 ? (
    <Swiper className="pb-3" pagination={true} modules={[Pagination]}>
      {images.map((image, index) => (
        <SwiperSlide className="h-72 w-full" key={index} style={{ width: "auto" }}>
          <img src={image} className="h-72 w-full object-contain object-center" loading="lazy" alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <img className="h-72 w-full object-contain object-center" src={images[0]} alt="" />
  );

export default PreviewSlider;
