import { ProductType } from "@utils/types/models";

import ProductCard from "./ui/ProductCard";

const Products = ({ className }: { className?: string }) => {
   const products: Array<ProductType> = [
      {
         id: 1,
         title: "iPhone 9",
         description: "An apple mobile which is nothing like apple",
         price: 549,
         discountPercentage: 12.96,
         rating: 4.69,
         stock: 94,
         brand: "Apple",
         category: "smartphones",
         thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
         images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
         ]
      },
      {
         id: 2,
         title: "iPhone 9",
         description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate ipsum eveniet rerum vitae exercitationem! Ducimus pariatur eos nobis labore facere neque optio assumenda, minus, molestias harum, hic incidunt cumque!",
         price: 549,
         discountPercentage: 12.96,
         rating: 4.69,
         stock: 94,
         brand: "Apple",
         category: "smartphones",
         thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
         images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
         ]
      },
      {
         id: 3,
         title: "iPhone 9",
         description:
            "An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
         price: 549,
         discountPercentage: 12.96,
         rating: 4.69,
         stock: 94,
         brand: "Apple",
         category: "smartphones",
         thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
         images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
         ]
      },
      {
         id: 4,
         title: "iPhone 9",
         description: "An apple mobile which is nothing like apple",
         price: 549,
         discountPercentage: 12.96,
         rating: 4.69,
         stock: 94,
         brand: "Apple",
         category: "smartphones",
         thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
         images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
         ]
      },
      {
         id: 5,
         title: "iPhone 9",
         description: "An apple mobile which is nothing like apple",
         price: 549,
         discountPercentage: 12.96,
         rating: 4.69,
         stock: 94,
         brand: "Apple",
         category: "smartphones",
         thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
         images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
         ]
      }
   ];

   return (
      <main className={`${className ?? ""}`}>
         <ul className="grid grid-cols-products content-stretch justify-center gap-px">
            {products.map((product) => (
               <li key={product.id}>
                  <ProductCard className="h-full" product={product} />
               </li>
            ))}
         </ul>
      </main>
   );
};

export default Products;
