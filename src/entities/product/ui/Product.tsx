import React, { FC, MouseEvent } from 'react';
import { ProductType } from 'entities/product/types';
import { FavouriteSvg } from 'shared/ui/svg';
import Image from 'next/image';
import { useFavorites } from 'features/favourites/lib/hooks';
import { useRouter } from 'next/navigation';

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({ product }) => {
  const { addFavorite } = useFavorites();
  const nav = useRouter();
  const toggleFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addFavorite(product);
  };

  const handlerRedirect = () => {
    nav.push(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handlerRedirect}
      className='relative flex min-h-[435px] w-full min-w-[235px] transform flex-col items-center justify-between border border-primary-border-color pb-[13px] pl-[14px] pt-[10px] transition duration-100 ease-in-out active:scale-95'
    >
      <div className='flex self-start pb-[10px] pl-2 text-[14px] md:pl-4'>
        <div>
          <p className='text-primary-product-title-color'>{product.category}</p>
          <p className='max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap font-medium'>{product.title}</p>
        </div>
        <div
          className='absolute right-4 top-4 transform cursor-pointer transition duration-100 ease-in-out active:scale-90'
          onClick={toggleFavorite}
        >
          <FavouriteSvg />
        </div>
      </div>
      <div className={'flex flex-col'}>
        <Image width={156} height={223} src={product.image} alt={product.title} priority className='object-cover' />
      </div>
      <p className='self-start pt-2 text-xl font-black md:pt-4 md:text-2xl'>{product.price}$</p>
    </div>
  );
};

export { Product };
