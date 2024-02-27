import { ProductType } from "@types";

export interface ProductsApiResponse {
  products: Array<ProductType>;
  total: number;
  limit: number;
}

export interface ProductsParamsType {
  searchTerm?: string;
  category?: string;
  limit?: number;
  skip?: number;
}
