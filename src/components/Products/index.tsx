import { ProductType } from "@types";

import useProducts from "@utils/hooks/useProducts";

import ProductCard from "@components/Products/ProductCard";
import { ProductCardsSkeleton } from "@components/ui/Skeletons";

import LoadMoreBtn from "./LoadMoreBtn";

const Products = ({ className }: { className?: string }) => {
  const { isLoading, total, limit, isError, products } = useProducts();

  return (
    <main className={`${className ?? ""} text-center`}>
      <ul
        // eslint-disable-next-line max-len
        className="grid grid-cols-1 content-stretch justify-center gap-3 text-left sm:grid-cols-2 sm:gap-px lg:grid-cols-3 xl:grid-cols-products"
      >
        {products.map((product: ProductType) => (
          <li className="max-w-full" key={product.id}>
            <ProductCard className="h-full py-5" product={product} />
          </li>
        ))}
        {isLoading && <ProductCardsSkeleton count={limit} />}
        {!isLoading && !total && !isError && <p>Ничего не найдено, попробуйте изменить запрос.</p>}
      </ul>
      {!isLoading && isError && <LoadMoreBtn />}
    </main>
  );
};

export default Products;
