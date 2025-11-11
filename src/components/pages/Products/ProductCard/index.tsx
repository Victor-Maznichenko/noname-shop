import { forwardRef, memo, useState } from "react";

import { calcOldPrice, cn, formatCurrency } from "@helpers";
import { addToCart } from "@redux/reducers/cartReducer";
import { useAppDispatch } from "@redux/store";

import { Badge, Button, Icons, ShortDescription } from "@components/ui";

import { ProductCardModal } from "./ProductCardModal";
import { ProductCardPreview } from "./ProductCardPreview";

interface ProductCardProps extends Product {
  className?: string;
}

export const ProductCard = memo(
  forwardRef<HTMLElement | null, ProductCardProps>(({ className, ...product }, ref) => {
    const dispatch = useAppDispatch();
    const [modalActive, setModalActive] = useState(false);
    const toggleModalActive = () => setModalActive(prevState => !prevState);
    const handleAddToCart = () => dispatch(addToCart(product));

    return (
      <article
        className={cn(
          "flex h-full flex-col justify-between bg-gray-light p-1 text-s text-gray-dark sm:p-4",
          className
        )}
        ref={ref}
      >
        <div className="relative">
          <Badge>
            <span className="text-blue-light">{product.discountPercentage}%</span>
            off sale
          </Badge>

          <ProductCardPreview images={product.images} />

          <Badge className="mb-2">
            <Icons.Star className="text-blue-light" />
            <span>{product.rating}</span>
          </Badge>

          <h4 className="mb-2">{product.title}</h4>

          <ShortDescription
            className="mb-2"
            description={product.description}
            onShowMore={toggleModalActive}
            limitTruncate={90}
          />

          <ProductCardModal
            product={product}
            modalActive={modalActive}
            toggleModalActive={toggleModalActive}
          />
        </div>

        <div className="flex items-center">
          <Button
            className="mr-2 inline-flex items-center gap-x-1"
            variant="filled-sm-blue-rounded"
            onClick={handleAddToCart}
          >
            <Icons.Cart />
            <span>{formatCurrency(product.price)}</span>
          </Button>
          <s className="text-gray-main">${calcOldPrice(product.price, product.discountPercentage)}</s>
        </div>
      </article>
    );
  })
);

ProductCard.displayName = "ProductCard";
