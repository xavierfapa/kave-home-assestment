import styles from "./productdetail.module.css";
import Image from "next/image";
import { ProductType } from "@/types/types";
import BtnFavorites from "../BtnFavorites/BtnFavorites";

interface ProductDetailProps {
  product: ProductType;
}

function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className={styles.productWrapper}>
      {product.productImageUrl && (
        <div className={styles.imgWrapper}>
          <Image
            width={300}
            height={300}
            src={product.productImageUrl}
            alt={product.productName}
            className={styles.productImage}
          />
          <div className={styles.buttonWrapper}>
            <BtnFavorites product={product} />
          </div>
        </div>
      )}
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Argo</h1>
        <p className={styles.category}>{product.productCategoryHierarchy}</p>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>{product.productPrice}</p>
          <span className={styles.euro}>€</span>
        </div>
        <p className={styles.description}>{product.productName}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
