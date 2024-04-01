import styles from "./product.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ProductType } from "@/types/types";
import Link from "next/link";
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
        <Link href={`/categoria/${product.productSku}`}>
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
      <BtnFavorites product={product} />
    </div>
  );
}

export default Product;
