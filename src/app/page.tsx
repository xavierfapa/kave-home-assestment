import { getProducts } from "@/services/products";
import ProductList from "@/components/ProductList/ProductList";
import PaginationControls from "@/components/PaginationControls/PaginationControls";
import Categorias from "@/components/Categorias/Categorias";
import MainImage from "@/components/MainImage/MainImage";

interface searchParams {
  searchParams: {
    page: string;
    per_page: string;
  };
}

export default async function Home({ searchParams }: searchParams) {
  const products = await getProducts();
  // console.log("products", products);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";

  const start = (parseInt(page) - 1) * parseInt(per_page);
  const end = start + parseInt(per_page);

  const entries = products.results.slice(start, end);

  // console.log("hola", entries);

  return (
    <main>
      <MainImage />

      <Categorias />

      {entries && <ProductList productList={entries} />}

      <PaginationControls
        hasNextPage={end < products.results.length}
        hasPrevPage={start > 0}
      />
    </main>
  );
}
