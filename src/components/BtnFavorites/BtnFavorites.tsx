"use client";
import styles from "./btnfavorites.module.css";
import Image from "next/image";
import { useFavorites } from "@/context/favoritesContext";
import { useState } from "react";
import { ProductType } from "@/types/types";

interface ProductProps {
  product: ProductType;
}

function BtnFavorites({ product }: ProductProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const [hovered, setHovered] = useState(false);

  const handleAddToFavorites = () => {
    if (toggleFavorite) {
      toggleFavorite(product);
    } else {
      console.error("addToFavorites is undefined");
    }
  };

  const isFavorite = favorites.find(
    (fav) => fav.productSku === product.productSku
  );

  return (
    <Image
      src={hovered ? "/like.svg" : isFavorite ? "/like.svg" : "/dislike.svg"}
      width={21}
      height={19}
      alt=""
      className={styles.likeButton}
      onClick={handleAddToFavorites}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

export default BtnFavorites;
