import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CategoriesSkeleton } from "@/components/ui/Skeletons";
import { $categories, $currentCategory, changeCurrentCategory, getCategoriesFx } from "@/effector/categories";

import "swiper/css";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, currentCategory, getCategoriesEffect, isLoading] = useUnit([
    $categories,
    $currentCategory,
    getCategoriesFx,
    getCategoriesFx.pending,
  ]);

  const handleClick = (category: string) => {
    changeCurrentCategory(category);
    setSearchParams({ category });
  };

  console.log(searchParams, currentCategory);

  useEffect(() => {
    changeCurrentCategory(searchParams.get("category") ?? "all");
  }, [searchParams]);

  useEffect(() => {
    getCategoriesEffect();
  }, [getCategoriesEffect]);

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
                onClick={() => handleClick(category)}
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
