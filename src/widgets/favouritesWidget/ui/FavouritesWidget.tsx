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
    <div className={'mx-auto flex max-w-7xl px-[170px]'}>
      <div className='p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Избранные товары</h1>
        <div className='grid grid-cols-1 gap-4'>
          {favorites.length === 0 ? (
            <p>Нет избранных товаров.</p>
          ) : (
            favorites.map((product, idx) => (
              <div key={idx}>
                <div>
                  <Image src={product.image} alt={product.title} width={134} height={178} />
                  <div>
                    <p>{product.category}</p>
                    <p className={'text-[20px] font-black'}>{product.title}</p>
                  </div>
                  <div className={'flex'}>
                    <p className={'font-black'}>{product.price}$</p>
                    <button
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
