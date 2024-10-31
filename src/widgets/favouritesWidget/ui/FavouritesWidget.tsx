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
    <div className={'mx-auto mb-[100px] max-w-7xl px-[170px]'}>
      <div className={'mt-[64px] border-b border-primary-border-color'}>
        <h1 className='mb-4 text-[30px] font-normal'>Favourite</h1>
      </div>
      <div>
        <div className='grid grid-cols-1 gap-4'>
          {Object.keys(groupedFavorites).length === 0 ? (
            <p>Нет избранных товаров.</p>
          ) : (
            filteredFavorites.map(({ product, quantity }, idx) => (
              <div key={idx}>
                <p className={'mt-[40px] text-2xl'}>{quantity} item</p>
                <div className={'mt-[35px] flex w-full justify-between'}>
                  <div className={'flex'}>
                    <Image src={product.image} alt={product.title} width={134} height={178} />
                    <div className={'ml-[50px]'}>
                      <p>{product.category}</p>
                      <p className={'max-w-[215px] text-[20px] font-black'}>{product.title}</p>
                    </div>
                  </div>
                  <div className={'flex gap-6'}>
                    <p className={'text-[20px] font-black'}>{(product.price * quantity).toFixed(2)}$</p>
                    <button
                      className={'mt-[3px] flex items-start'}
                      onClick={() => {
                        handleRemoveFavorite(product.id);
                      }}
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
    </div>
  );
};

export { FavouritesWidget };
