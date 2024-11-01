'use client';
import { FC } from 'react';
import { useFavorites } from 'features/favourites/lib/hooks';
import Image from 'next/image';
import { ProductType } from 'entities/product/types';
import { useAppSelector } from 'app/providers/store';

const FavouritesWidget: FC = () => {
  const { favorites, removeFavorite } = useFavorites();
  const searchTerm = useAppSelector((state) => state.Shared.search);

  const handleRemoveFavorite = (productId: number) => {
    removeFavorite(productId);
  };

  const groupedFavorites = favorites.reduce(
    (acc: Record<number, { product: ProductType; quantity: number }>, product) => {
      if (acc[product.id]) {
        acc[product.id].quantity += 1;
      } else {
        acc[product.id] = { product, quantity: 1 };
      }
      return acc;
    },
    {},
  );

  const filteredFavorites = Object.values(groupedFavorites).filter(({ product }) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className='mx-auto mb-[50px] w-full max-w-7xl px-4'>
      <div className='mt-16 border-b border-primary-border-color'>
        <h1 className='mb-4 text-[30px] font-normal'>Favourite</h1>
      </div>
      <div className='mt-4 grid gap-8'>
        {Object.keys(groupedFavorites).length === 0 ? (
          <p className='text-center'>Нет избранных товаров.</p>
        ) : (
          filteredFavorites.map(({ product, quantity }, idx) => (
            <div key={idx} className='space-y-4'>
              <p className='text-xl sm:text-2xl'>
                {quantity} item{quantity > 1 ? 's' : ''}
              </p>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex gap-4 sm:gap-6'>
                  <div className={'flex flex-col'}>
                    <Image src={product.image} alt={product.title} width={120} height={160} />
                  </div>
                  <div>
                    <p className='text-sm sm:text-base'>{product.category}</p>
                    <p className='max-w-xs text-[20px] font-black sm:max-w-[215px]'>{product.title}</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 sm:gap-6'>
                  <p className='text-[20px] font-black'>{(product.price * quantity).toFixed(2)}$</p>
                  <button
                    className='mt-1 flex transform items-start transition duration-100 ease-in-out active:scale-90 sm:mt-0'
                    onClick={() => handleRemoveFavorite(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { FavouritesWidget };
