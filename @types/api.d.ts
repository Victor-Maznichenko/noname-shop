interface ProductCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  thumbnail: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

interface ProductsResponse {
  products: Array<Product>;
  total: number;
  limit: number;
}

interface GetProductsParams {
  searchTerm?: string;
  category?: string;
  limit?: number;
  skip?: number;
}

interface Category {
  name: string;
  slug: string;
  url: string;
}
