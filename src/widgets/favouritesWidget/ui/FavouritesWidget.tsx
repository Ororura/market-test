'use client';
import { FC } from 'react';
import { useFavorites } from 'features/favourites/lib/hooks';
import Image from 'next/image';

const FavouritesWidget: FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  const handleRemoveFavorite = (productId: number) => {
    removeFavorite(productId);
  };
  return (
    <div className={'mx-auto mb-[100px] max-w-7xl px-[170px]'}>
      <div className={'mt-[64px] border-b border-primary-border-color'}>
        <h1 className='mb-4 text-[30px] font-normal'>Favourite</h1>
      </div>
      <div>
        <div className='grid grid-cols-1 gap-4'>
          {favorites.length === 0 ? (
            <p>Нет избранных товаров.</p>
          ) : (
            favorites.map((product, idx) => (
              <div key={idx}>
                <div className={'mt-[35px] flex w-full justify-between'}>
                  <div className={'flex'}>
                    <Image src={product.image} alt={product.title} width={134} height={178} />
                    <div className={'ml-[50px]'}>
                      <p>{product.category}</p>
                      <p className={'max-w-[215px] text-[20px] font-black'}>{product.title}</p>
                    </div>
                  </div>
                  <div className={'flex gap-6'}>
                    <p className={'text-[20px] font-black'}>{product.price}$</p>
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
