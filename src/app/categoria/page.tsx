import React from "react";
import { getProducts } from "@/services/products";
import ProductList from "@/components/ProductList/ProductList";

// El código comentado genera páginas estáticas (SSR) para los slugs
// import { ProductType } from "@/types/types";

// export async function generateStaticParams() {
//   const products1 = await getProducts();
//   return products1.results.map((product: ProductType) => ({
//     id: product.productSku,
//   }));
// }

// interface pageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function page({ params }: pageProps) {
export default async function page() {
  const products = await getProducts();
  // const { id } = params;
  return (
    <div>
      {products && <ProductList productList={products.results.slice(0, 10)} />}
    </div>
  );
}
