import styles from "./productdetail.module.css";
import Image from "next/image";
import { ProductType } from "@/types/types";

interface ProductDetailProps {
  product: ProductType;
}

function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className={styles.productWrapper}>
      {product.productImageUrl && (
        <Image
          width={300}
          height={300}
          src={product.productImageUrl}
          alt={product.productName}
          className={styles.productImage}
        />
      )}
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Argo</h1>
        <p className={styles.category}>{product.productCategoryHierarchy}</p>
        <p className={styles.price}>
          {product.productPrice}
          <span className={styles.euro}>€</span>
        </p>
        <p className={styles.description}>{product.productName}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
