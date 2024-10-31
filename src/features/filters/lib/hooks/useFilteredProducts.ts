import { useMemo } from 'react';
import { ProductType } from 'entities/product/types';

const useFilteredProducts = (products: ProductType[], selectedCategories: string[]) => {
  return useMemo(() => {
    if (selectedCategories.length === 0) return products;

    return products.filter((product) => selectedCategories.includes(product.category));
  }, [products, selectedCategories]);
};

export default useFilteredProducts;
