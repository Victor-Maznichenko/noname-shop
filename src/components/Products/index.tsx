import { useList, useUnit } from "effector-react";
import { useEffect } from "react";

import { $limit, $products, getProductsFx, nextPage } from "@/effector/products";
import useInView from "@utils/hooks/useInView";

import ProductCard from "@components/Products/ProductCard";
import { ProductCardsSkeleton } from "@components/ui/Skeletons";
// import LoadMoreBtn from "@components/Products/LoadMoreBtn";

let count = 1;

const Products = ({ className }: { className?: string }) => {
  console.log("Renders count", count++);

  const { inView, setElement } = useInView();
  const [products, limit, getProductsEffect, isLoading] = useUnit([
    $products,
    $limit,
    getProductsFx,
    getProductsFx.pending,
  ]);

  useEffect(() => {
    getProductsEffect();
  }, [getProductsEffect]);

  useEffect(() => {
    if (inView) nextPage();
  }, [inView]);

  return (
    <main className={`${className ?? ""} text-center`}>
      <b className="fixed right-0 top-0 z-40">{String(inView)}</b>
      <div
        // eslint-disable-next-line max-len
        className="grid grid-cols-1 content-stretch justify-center gap-3 text-left sm:grid-cols-2 sm:gap-px lg:grid-cols-3 xl:grid-cols-products"
      >
        {useList($products, (product, index) => {
          const productRef = index === products.length - 1 && !isLoading ? setElement : null;
          return <ProductCard product={product} className="h-full max-w-full py-5" ref={productRef} />;
        })}
        {isLoading && <ProductCardsSkeleton count={limit} />}
        {/* {!isLoading && !total && !isError && <p>Ничего не найдено, попробуйте изменить запрос.</p>} */}
      </div>
      {/* {!isLoading && isError && <LoadMoreBtn />} */}
    </main>
  );
};

export default Products;
