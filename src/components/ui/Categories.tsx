import { useSearchParams } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentCategory = searchParams.get("category") ?? "";

   const handleClick = (category: string) => setSearchParams({ category });

   return (
      <Swiper slidesPerView="auto" freeMode={true} modules={[FreeMode]} spaceBetween={1}>
         {[...Array(20)].map((_, index) => {
            const activeClass =
               currentCategory === `category ${index}`
                  ? "bg-blue-light text-white hover:bg-blue-light elem-list-style"
                  : "bg-white";

            return (
               <SwiperSlide
                  className={`${activeClass} cursor-pointer px-2 py-[0.31rem] transition-all duration-300 hover:bg-blue-light/60 hover:text-white`}
                  key={index}
                  style={{ width: "auto" }}
                  onClick={() => handleClick(`category ${index}`)}
               >
                  <button className="pointer-events-none block text-m" type="button">
                     category {index}
                  </button>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default Categories;
