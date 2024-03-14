import { ProductType } from "@types";

import { useEffect, useRef, useState } from "react";

import { clearProducts, getProducts, setProductsLoading } from "@redux/reducers/productsReducer";
import { useAppDispatch, useAppSelector } from "@redux/store";

import useInView from "@utils/hooks/useInView";

import ProductCard from "@components/Products/ProductCard";
import { ProductCardsSkeleton } from "@components/ui/Skeletons";

import LoadMoreBtn from "./LoadMoreBtn";

const Products = ({ className }: { className?: string }) => {
  const countRendersRef = useRef(1);
  const { inView, setElement } = useInView();

  const { isLoading, limit, total, searchTerm, isError, products } = useAppSelector(state => state.products);
  const { currentCategory } = useAppSelector(state => state.categories);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useAppDispatch();

  // When changing the category, clear products, set the current page number to 0
  useEffect(() => {
    setCurrentPage(0);
    dispatch(clearProducts());
    dispatch(setProductsLoading(true));
  }, [searchTerm, currentCategory, dispatch]);

  // If isLoading = true loads the items.
  useEffect(() => {
    if (isLoading && !isError) {
      const queryParams = {
        category: currentCategory,
        searchTerm,
        skip: currentPage * limit,
      };

      dispatch(getProducts(queryParams));
    }
  }, [currentCategory, currentPage, dispatch, isError, isLoading, limit, searchTerm]);

  // Loading products on view
  useEffect(() => {
    if (inView) {
      console.log("Loading", countRendersRef.current++);
      setCurrentPage(prevState => prevState + 1);
      dispatch(setProductsLoading(true));
    }
  }, [dispatch, inView]);

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
              <ProductCard className="h-full py-5" product={product} />
            </li>
          );
        })}
        {isLoading && <ProductCardsSkeleton count={limit} />}
        {!isLoading && !total && !isError && <p>Ничего не найдено, попробуйте изменить запрос.</p>}
      </ul>
      {!isLoading && isError && <LoadMoreBtn />}
    </main>
  );
};

export default Products;
