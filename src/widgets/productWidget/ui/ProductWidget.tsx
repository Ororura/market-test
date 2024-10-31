'use client';

import { FC, useState } from 'react';
import { Filters } from 'features/filters/ui';
import { useAppSelector } from 'app/providers/store';
import { ProductType } from 'entities/product/types';
import { useGetCategoriesQuery, useGetProductQuery } from 'entities/product/api';
import { Product } from 'entities/product/ui';
import useFilteredProducts from 'features/filters/lib/hooks/useFilteredProducts';
import Link from 'next/link';
import { PriceSort } from 'features/priceSort/ui';
import Breadcrumbs from 'shared/ui/breadcrumbs/ui/Breadcrumbs';

const ProductWidget: FC = () => {
  useGetProductQuery();
  const products: ProductType[] = useAppSelector((state) => state.Product);
  const { data: categories = [] } = useGetCategoriesQuery();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc'>('asc');

  const filteredProducts = useFilteredProducts(products, selectedCategories);

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    return sortByPrice === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className={'mx-auto flex max-w-7xl px-[170px]'}>
      <Filters
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <div className={'ml-[89px] text-[14px]'}>
        <Breadcrumbs className='mt-[21px]' items={[{ label: 'Main' }, { label: 'Catalog', href: '/', isBold: true }]} />
        <PriceSort sortByPrice={sortByPrice} setSortByPrice={setSortByPrice} />
        <div className={'mb-[100px] mt-[28px] grid grid-cols-[repeat(3,minmax(235px,1fr))]'}>
          {sortedProducts.length !== 0 &&
            sortedProducts.map((value, idx) => (
              <Link key={idx} href={`/product/${value.id}`}>
                <Product product={value} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export { ProductWidget };
