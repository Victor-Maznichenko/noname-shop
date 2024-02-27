import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import useCategories from "@utils/hooks/useCategories";
import useCurrentCategory from "@utils/hooks/useCurrentCategory";

import { CategoriesSkeleton } from "./Skeletons";

const Categories = () => {
  const { isLoading, categories } = useCategories();
  const { currentCategory, changeCurrentCategory } = useCurrentCategory();

  return (
    <>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        observer
        modules={[FreeMode, Mousewheel]}
        mousewheel
        spaceBetween={1}
      >
        {!isLoading &&
          categories.map((category: string) => {
            const activeClass =
              currentCategory === category
                ? "bg-blue-light text-white hover:bg-blue-light elem-list-style pointer-events-none"
                : "bg-white";

            return (
              <SwiperSlide
                // eslint-disable-next-line max-len
                className={`${activeClass} cursor-pointer px-2 py-[0.31rem] transition-all duration-300 hover:bg-blue-light/60 hover:text-white`}
                key={category}
                style={{ width: "auto" }}
                onClick={() => changeCurrentCategory(category)}
              >
                <button className="pointer-events-none block text-m" type="button">
                  {category}
                </button>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {isLoading && <CategoriesSkeleton />}
    </>
  );
};

export default Categories;
