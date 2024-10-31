'use client';

import { FC, useState } from 'react';
import { Filters } from 'features/filters/ui';
import { useAppSelector } from 'app/providers/store';
import { ProductType } from 'entities/product/types';
import { useGetCategoriesQuery, useGetProductQuery } from 'entities/product/api';
import { Product } from 'entities/product/ui';
import useFilteredProducts from 'features/filters/lib/hooks/useFilteredProducts';

const ProductWidget: FC = () => {
  useGetProductQuery();
  const products: ProductType[] = useAppSelector((state) => state.Product);
  const { data: categories = [] } = useGetCategoriesQuery();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProducts = useFilteredProducts(products, selectedCategories);

  return (
    <div className={'mx-auto flex max-w-7xl'}>
      <Filters
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <div className={'ml-[89px] text-[14px]'}>
        <p className={'mt-[21px]'}>
          Main {'>'} <span className={'font-bold'}>Catalog</span>
        </p>
        <p className={'mt-[29px] text-[20px] font-medium'}>Catalog</p>
        <p className={'mt-[30px]'}>Price</p>
        <div className={'mt-[28px] grid grid-cols-[repeat(3,minmax(235px,1fr))]'}>
          {filteredProducts.length !== 0 && filteredProducts.map((value, idx) => <Product key={idx} product={value} />)}
        </div>
      </div>
    </div>
  );
};

export { ProductWidget };
