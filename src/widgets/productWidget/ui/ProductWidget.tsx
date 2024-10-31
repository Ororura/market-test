'use client';

import { FC, useEffect } from 'react';
import { Filters } from 'features/filters/ui';
import { useAppSelector } from 'app/providers/store';
import { ProductType } from 'entities/product/types';
import { useGetProductQuery } from 'entities/product/api';

const ProductWidget: FC = () => {
  const cart: ProductType[] = useAppSelector((state) => state.Product);
  const { data, isFetching } = useGetProductQuery();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className={'mx-auto max-w-7xl'}>
      <Filters />
    </div>
  );
};

export { ProductWidget };
