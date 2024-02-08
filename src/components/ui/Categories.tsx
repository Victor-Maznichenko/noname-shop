import { useSearchParams } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentCategory = searchParams.get("category") ?? "";

   const handleClick = (category: string) => setSearchParams({ category });

   return (
      <Swiper slidesPerView="auto" freeMode={true} observer modules={[FreeMode]} spaceBetween={1}>
         {[...Array(20)].map((_, index) => {
            const activeClass =
               currentCategory === `category ${index}` ? "bg-blue-light text-white" : "bg-white";

            return (
               <SwiperSlide
                  className="cursor-pointer"
                  key={index}
                  style={{ width: "auto" }}
                  onClick={() => handleClick(`category ${index}`)}
               >
                  <button
                     className={`${activeClass} pointer-events-none block px-2 py-[0.31rem] text-m`}
                     type="button"
                  >
                     category {index}
                  </button>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default Categories;
