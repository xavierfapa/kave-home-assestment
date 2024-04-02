import styles from "./productlist.module.css";
import { ProductType } from "@/types/types";
import Product from "../Product/Product";

interface ProductListProps {
  productList: ProductType[];
}

function ProductList({ productList }: ProductListProps) {
  return (
    <div className={styles.productList}>
      {productList.map(
        (product) =>
          product.productImageUrl && (
            <Product key={product.productSku} product={product} />
          )
      )}
    </div>
  );
}

export default ProductList;
