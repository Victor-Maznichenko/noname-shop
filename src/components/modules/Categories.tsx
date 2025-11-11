import { useEffect } from "react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@helpers";
import { changeCurrentCategory, getCategories } from "@redux/reducers/categoriesReducer";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { CategoriesSkeleton, Condition } from "@components/ui";
import "swiper/css";

export const Categories = () => {
  const dispatch = useAppDispatch();
  const { isLoading, categories, currentCategory } = useAppSelector(({ categories }) => ({
    isLoading: categories.isLoading,
    categories: categories.categories,
    currentCategory: categories.currentCategory,
  }));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Condition
      value={!isLoading}
      then={
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          observer
          modules={[FreeMode, Mousewheel]}
          mousewheel
          spaceBetween={1}
        >
          {categories.map(category => {
            const activeClass =
              currentCategory === category
                ? "bg-blue-light text-white hover:bg-blue-light elem-list-style pointer-events-none"
                : "bg-white";

            return (
              <SwiperSlide
                className={cn(
                  activeClass,
                  `cursor-pointer px-2 py-[0.31rem] transition-all duration-300 hover:bg-blue-light/60
                  hover:text-white`
                )}
                key={category}
                style={{ width: "auto" }}
                onClick={() => dispatch(changeCurrentCategory(category))}
              >
                <button className="pointer-events-none block text-m" type="button">
                  {category}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
      else={<CategoriesSkeleton />}
    />
  );
};
