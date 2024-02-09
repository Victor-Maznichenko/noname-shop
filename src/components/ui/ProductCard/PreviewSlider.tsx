import { Swiper, SwiperSlide } from "swiper/react";

const PreviewSlider = ({ images }: { images: Array<string> }) => (
   <Swiper slidesPerView={1}>
      {images.map((image, index) => (
         <SwiperSlide className="h-72 w-full" key={index} style={{ width: "auto" }}>
            <img className="h-full w-full" src={image} loading="lazy" alt="" />
         </SwiperSlide>
      ))}
   </Swiper>
);

export default PreviewSlider;
