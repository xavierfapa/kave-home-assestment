import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { ProductType } from "@/types/types";

interface FavoritesContextType {
  favorites: ProductType[];
  setFavorites: React.Dispatch<React.SetStateAction<ProductType[]>>;
  toggleFavorite?: (item: ProductType) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: () => {},
  toggleFavorite: () => {},
});

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ProductType[]>(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item: ProductType) => {
    setFavorites((prev) => {
      const isAlreadyInFavorites = prev.some(
        (fav) => fav.productSku === item.productSku
      );

      if (isAlreadyInFavorites) {
        return prev.filter((fav) => fav.productSku !== item.productSku);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
