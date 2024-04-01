import React from "react";
import { getProducts } from "@/services/products";
import { ProductType } from "@/types/types";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

type paramProps = {
  params: {
    id: string;
  };
};

async function page({ params }: paramProps) {
  const products = await getProducts();
  const { id } = params;
  const product = products.results.find(
    (product: ProductType) => product.productSku === id
  );
  // console.log(products.results.slice(0, 3));

  return <ProductDetail product={product} />;
}

export default page;
