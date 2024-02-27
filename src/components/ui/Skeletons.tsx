import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProductCardSkeleton = () => (
  <Skeleton
    className="min-h-[500px]"
    height="100%"
    width="100%"
    baseColor="#D1D1D1"
    highlightColor="#ECEBEB"
  />
);

export const ProductCardsSkeleton = ({ count = 8 }: { count?: number }) => (
  <>
    {[...Array(count)].map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </>
);

export const CategoriesSkeleton = () => (
  <>
    {[...Array(20)].map((_, index) => (
      <Skeleton width={80} height={28} key={index} baseColor="#D1D1D1" highlightColor="#ECEBEB" />
    ))}
  </>
);
