'use client';

import { FC, useEffect } from 'react';
import { Filters } from 'features/filters/ui';
import { useAppSelector } from 'app/providers/store';
import { ProductType } from 'entities/product/types';
import { useGetProductQuery } from 'entities/product/api';
import { Product } from 'entities/product/ui';

const ProductWidget: FC = () => {
  const products: ProductType[] = useAppSelector((state) => state.Product);
  const { data, isFetching } = useGetProductQuery();

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={'mx-auto max-w-7xl'}>
      <Filters />
      {products.length !== 0 && products.map((value, idx) => <Product key={idx} product={value} />)}
    </div>
  );
};

export { ProductWidget };
