import { getProducts } from "@/services/products";
import { ProductType } from "@/types/types";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const product = await getProducts().then((products) =>
    products.results.find((product: ProductType) => product.productSku === id)
  );

  return {
    title: product.productName,
    description: product.productMaterials,
  };
}

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

  return <ProductDetail product={product} />;
}

export default page;
