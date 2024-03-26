import { ProductType } from "@types";
import { useUnit } from "effector-react";
import { useEffect } from "react";

import { $limit, $page, $products, nextPage, updateProductsFx } from "@/effector/products";
import useInView from "@utils/hooks/useInView";

import ProductCard from "@components/Products/ProductCard";
import { ProductCardsSkeleton } from "@components/ui/Skeletons";

// import LoadMoreBtn from "./LoadMoreBtn";

const Products = ({ className }: { className?: string }) => {
  const { inView, setElement } = useInView();

  const page = useUnit($page);
  const limit = useUnit($limit);
  const products = useUnit($products);
  const nextPageEvent = useUnit(nextPage);
  const updateProducts = useUnit(updateProductsFx);
  const isLoading = useUnit(updateProductsFx.pending);

  useEffect(() => {
    console.log("Loading", page);
  }, [page]);

  // Loading products on view
  useEffect(() => {
    if (inView) nextPageEvent();
  }, [inView, nextPageEvent]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <main className={`${className ?? ""} text-center`}>
      <b className="fixed right-0 top-0 z-40">{String(inView)}</b>
      <ul
        // eslint-disable-next-line max-len
        className="grid grid-cols-1 content-stretch justify-center gap-3 text-left sm:grid-cols-2 sm:gap-px lg:grid-cols-3 xl:grid-cols-products"
      >
        {products.map((product: ProductType, index: number) => {
          const productRef = index === products.length - 1 && !isLoading ? setElement : null;
          return (
            <li className="max-w-full" ref={productRef} key={product.id}>
              id={product.id}
              <ProductCard className="h-full py-5" product={product} />
            </li>
          );
        })}
        {isLoading && <ProductCardsSkeleton count={limit} />}
        {/* {!isLoading && !total && !isError && <p>Ничего не найдено, попробуйте изменить запрос.</p>} */}
      </ul>
      {/* {!isLoading && isError && <LoadMoreBtn />} */}
    </main>
  );
};

export default Products;
