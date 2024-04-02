"use client";
import { useFavorites } from "@/context/favoritesContext";
import ProductList from "@/components/ProductList/ProductList";
import PaginationControls from "@/components/PaginationControls/PaginationControls";

interface FavoritesProps {
  end: number;
  start: number;
}

function Favorites({ end, start }: FavoritesProps) {
  const { favorites } = useFavorites();

  const entries = favorites.slice(start, end);

  return (
    <>
      <div className="titleWrapper">
        <h2 className="title">Lista de favoritos</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet.</p>
      </div>
      <ProductList productList={entries} />;
      {favorites.length > 0 && (
        <PaginationControls
          hasNextPage={end < favorites.length}
          hasPrevPage={start > 0}
          productsLength={favorites.length}
        />
      )}
    </>
  );
}

export default Favorites;
