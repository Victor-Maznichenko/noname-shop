import { ProductType } from "@types";

export type ProductsApiResponse = {
   products: Array<ProductType>;
   total: number;
   limit: number;
};

export type ProductsParamsType = {
   searchTerm?: string;
   category?: string;
   limit?: number;
   skip?: number;
};
