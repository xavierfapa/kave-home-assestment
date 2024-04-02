import { Metadata } from "next";
import Favorites from "./Favorites";
// import { getProducts } from "@/services/products";

export const metadata: Metadata = {
  title: "Titulo de favoritos",
  description: "Desripción de favoritos",
};

// El código comentado genera páginas estáticas (SSR) para los slugs
// import { ProductType } from "@/types/types";

// export async function generateStaticParams() {
//   const product = await getProducts();
//   return product.results.map((product: ProductType) => ({
//     id: product.productSku,
//   }));
// }

interface searchParams {
  searchParams: {
    page: string;
    per_page: string;
  };
}
function page({ searchParams }: searchParams) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "20";

  const start = (parseInt(page) - 1) * parseInt(per_page);
  const end = start + parseInt(per_page);

  return <Favorites end={end} start={start} />;
}

export default page;
