'use client';

import { FC, useEffect, useState } from 'react';
import { Filters } from 'features/filters/ui';
import { useAppSelector } from 'app/providers/store';
import { ProductType } from 'entities/product/types';
import { Product } from 'entities/product/ui';
import useFilteredProducts from 'features/filters/lib/hooks/useFilteredProducts';
import { PriceSort } from 'features/priceSort/ui';
import Breadcrumbs from 'shared/ui/breadcrumbs/ui/Breadcrumbs';
import { setNewProduct } from 'entities/product/model';
import { useDispatch } from 'react-redux';

type Props = {
  products: ProductType[];
  categories: string[];
};

const ProductWidget: FC<Props> = ({ products, categories }) => {
  const searchTerm = useAppSelector((state) => state.Shared.search);
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc'>('asc');

  const filteredProducts = useFilteredProducts(products, selectedCategories);

  useEffect(() => {
    dispatch(setNewProduct(products));
  }, [dispatch, products]);

  const sortedProducts = filteredProducts
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice()
    .sort((a, b) => (sortByPrice === 'asc' ? a.price - b.price : b.price - a.price));

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
          {sortedProducts.length !== 0 && sortedProducts.map((value, idx) => <Product key={idx} product={value} />)}
        </div>
      </div>
    </div>
  );
};

export { ProductWidget };
