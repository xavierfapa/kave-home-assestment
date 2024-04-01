"use client";
import { ReactNode } from "react";
import FavoritesProvider from "./favoritesContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}

export default Providers;
