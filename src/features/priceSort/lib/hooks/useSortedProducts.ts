import { useMemo } from 'react';
import { ProductType } from 'entities/product/types';

const useSortedProducts = (products: ProductType[], sortByPrice: 'asc' | 'desc') => {
  return useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortByPrice === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }, [products, sortByPrice]);
};

export { useSortedProducts };
