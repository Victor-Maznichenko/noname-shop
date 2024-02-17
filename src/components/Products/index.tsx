import { ProductType } from "@types";

import useProducts from "@utils/hooks/useProducts";

import ProductCard from "@components/ui/ProductCard";
import { ProductCardsSkeleton } from "@components/ui/Skeletons";

import LoadMoreBtn from "./LoadMoreBtn";

const Products = ({ className }: { className?: string }) => {
   const { isLoading, total, limit, isError, products } = useProducts();

   return (
      <main className={`${className ?? ""} text-center`}>
         <ul className="grid grid-cols-products content-stretch justify-center gap-px text-left">
            {products.map((product: ProductType) => (
               <li key={product.id}>
                  <ProductCard className="h-full" product={product} />
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
