import styles from "./product.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types/types";
const BtnFavorites = dynamic(() => import("../BtnFavorites/BtnFavorites"), {
  ssr: false,
});

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  return (
    <div className={styles.productWrapper}>
      {product.productImageUrl && (
        <Link
          href={`/categoria/${product.productSku}`}
          aria-label={product.productName}
        >
          <Image
            width={300}
            height={300}
            src={product.productImageUrl}
            alt={product.productName}
            className={styles.productImage}
          />
        </Link>
      )}
      <h2 className={styles.title}>{product.productName.slice(0, 20)}</h2>
      <p className={styles.price}>{product.productPrice}€</p>
      <div className={styles.buttonWrapper}>
        <BtnFavorites product={product} />
      </div>
    </div>
  );
}

export default Product;
