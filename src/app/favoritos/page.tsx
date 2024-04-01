"use client";
import React from "react";
import { useFavorites } from "@/context/favoritesContext";
import ProductList from "@/components/ProductList/ProductList";
function Page() {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="titleWrapper">
        <h2 className="title">Lista de favoritos</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet.</p>
      </div>
      <ProductList productList={favorites} />;
    </>
  );
}

export default Page;
