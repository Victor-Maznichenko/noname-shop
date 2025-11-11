import { cn } from "@helpers";

import { Button, Condition, ProductCardsSkeleton } from "@components/ui";

import { ProductCard } from "./ProductCard";
import { useProducts } from "./useProducts";

export const Products = ({ className }: { className?: string }) => {
  const { products, total, isLoading, isError, limit, bottomRef, handleLoadMore } = useProducts();

  return (
    <main className={cn("text-center", className)}>
      <div
        className="grid grid-cols-1 content-stretch justify-center gap-3 text-left sm:grid-cols-2 sm:gap-px
          lg:grid-cols-3 xl:grid-cols-products"
      >
        {products.map((product, index: number) => {
          const isLastProduct = index === products.length - 1;
          const productRef = isLastProduct && !isLoading ? bottomRef : null;

          return (
            <ProductCard className="h-full max-w-full py-5" key={product.id} ref={productRef} {...product} />
          );
        })}

        <Condition value={isLoading} then={<ProductCardsSkeleton count={limit} />} />
      </div>

      <Condition
        value={!isLoading && !total && !isError}
        then={<p>Ничего не найдено, попробуйте изменить запрос.</p>}
      />

      <Condition
        value={!isLoading && isError}
        then={
          <Button variant="outlined-lg-white-rounded" onClick={handleLoadMore}>
            Загрузить еще...
          </Button>
        }
      />
    </main>
  );
};
