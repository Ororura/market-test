'use client';
import { FC } from 'react';
import Breadcrumbs from 'shared/ui/breadcrumbs/ui/Breadcrumbs';
import Image from 'next/image';
import { Rating } from 'shared/ui/rating';
import { FavouriteSvg } from 'shared/ui/svg';
import { ProductType } from 'entities/product/types';
import { useFavorites } from 'features/favourites/lib/hooks';

type Props = {
  product: ProductType;
};

const ProductDetailWidget: FC<Props> = ({ product }) => {
  const { addFavorite } = useFavorites();

  const toggleFavorite = () => {
    addFavorite(product);
  };

  return (
    <div className={'mx-auto mb-[100px] w-full max-w-7xl px-4'}>
      <Breadcrumbs
        className='mt-16'
        items={[{ label: 'Main' }, { label: 'Catalog', href: '/' }, { label: product.title, isBold: true }]}
      />
      <div className={'mt-[29px] flex flex-col md:flex-row'}>
        <div className={'flex flex-col items-center'}>
          <Image src={product.image} alt={product.title} width={200} height={260} className={'object-cover'} />
        </div>
        <div className={'ml-0 w-full md:ml-[42px]'}>
          <div className={'flex justify-between border-b border-primary-border-color pb-[15px]'}>
            <div>
              <p className={'font-black'}>{product.title}</p>
              <div className={'flex'}>
                <Rating rate={product.rating.rate} />
                <span className={'ml-[6px]'}>({product.rating.count} rated)</span>
              </div>
            </div>
            <div>
              <button
                onClick={toggleFavorite}
                className='flex transform items-center gap-[13px] rounded border py-[10px] pl-[22px] pr-[14.5px] transition duration-100 ease-in-out active:scale-95'
              >
                Add to favourite <FavouriteSvg />
              </button>
            </div>
          </div>
          <div className={'mt-[40px] flex flex-col md:flex-row'}>
            <div className={'mb-4 md:mb-0'}>
              <p className={'font-black'}>Description</p>
              <p className={'mt-[20px]'}>{product.description}</p>
            </div>
            <div className={'mt-4 flex flex-col items-end md:ml-[70px] md:mt-0'}>
              <p className={'text-[20px] font-black'}>${product.price}</p>
              <button className='mt-2 transform rounded bg-primary-orange px-[25px] py-2 text-white transition duration-100 ease-in-out active:scale-95'>
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetailWidget };
