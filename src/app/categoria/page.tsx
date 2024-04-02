import { getProducts } from "@/services/products";
import ProductList from "@/components/ProductList/ProductList";

export default async function page() {
  const products = await getProducts();

  return (
    <div>
      {products && <ProductList productList={products.results.slice(0, 10)} />}
    </div>
  );
}
