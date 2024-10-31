import { useEffect, useState } from 'react';
import { ProductType } from 'entities/product/types';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (product: ProductType) => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (productId: number) => {
    const index = favorites.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export { useFavorites };
