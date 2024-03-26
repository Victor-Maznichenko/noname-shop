import { useUnit } from "effector-react";
import { useEffect } from "react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  $currentCategory,
  $categories,
  updateCategoriesFx,
  updateCategory,
} from "@/effector/categories";

import { CategoriesSkeleton } from "./Skeletons";

import "swiper/css";

const Categories = () => {
  const categories = useUnit($categories);
  const currentCategory = useUnit($currentCategory);
  const changeCategoryEvent = useUnit(updateCategory);
  const updateCategories = useUnit(updateCategoriesFx);
  const isLoading = useUnit(updateCategoriesFx.pending);

  console.log(categories);
  useEffect(() => {
    updateCategories();
  }, [updateCategories]);

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
                onClick={() => changeCategoryEvent(category)}
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
