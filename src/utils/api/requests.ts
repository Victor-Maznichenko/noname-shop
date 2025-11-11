import { api } from "./instance";

export const getProducts = ({ limit = 10, skip = 0, ...rest }: GetProductsParams) =>
  api
    .get<ProductsResponse>("products", {
      searchParams: { limit, skip, ...rest },
    })
    .json();

export const getCategories = () => api.get<Category[]>("products/categories").json();
