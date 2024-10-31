import React, { FC, MouseEvent } from 'react';
import { ProductType } from 'entities/product/types';
import { FavouriteSvg } from 'shared/ui/svg';
import Image from 'next/image';
import { useFavorites } from 'features/favourites/lib/hooks';

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({ product }) => {
  const { addFavorite } = useFavorites();

  const toggleFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    addFavorite(product);
  };

  return (
    <div
      className={
        'relative flex min-h-[435px] w-full flex-col items-center justify-between border border-primary-border-color'
      }
    >
      <div className={'flex self-start pb-[13px] pl-6 pt-[10px] text-[14px]'}>
        <div>
          <p className={'text-primary-product-title-color'}>{product.category}</p>
          <p className={'max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap font-medium'}>{product.title}</p>
        </div>
        <div className={'absolute right-[20px] top-[20px] cursor-pointer'} onClick={toggleFavorite}>
          <FavouriteSvg />
        </div>
      </div>
      <Image width={156} height={223} src={product.image} alt={product.title} priority className={'object-cover'} />
      <p className={'self-start pb-[13px] pl-6 pt-[10px] text-2xl font-black'}>{product.price}$</p>
    </div>
  );
};

export { Product };
