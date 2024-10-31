'use client';
import { FC, useEffect, useState } from 'react';
import { useGetProductByIdQuery } from 'entities/product/api';
import Breadcrumbs from 'shared/ui/breadcrumbs/ui/Breadcrumbs';
import Image from 'next/image';
import { Rating } from 'shared/ui/rating';
import { FavouriteSvg } from 'shared/ui/svg';

type Props = {
  params: Promise<{ id: string }>;
};

const ProductDetailWidget: FC<Props> = ({ params }) => {
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const resolvedParams = await params;
      setProductId(resolvedParams.id);
    })();
  }, [params]);

  const { data: selectedProduct, isLoading } = useGetProductByIdQuery(productId!, {
    skip: !productId,
  });

  if (isLoading || !selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className={'mx-auto mb-[100px] max-w-7xl px-[170px]'}>
      <Breadcrumbs
        className='mt-16'
        items={[{ label: 'Main' }, { label: 'Catalog', href: '/' }, { label: selectedProduct.title, isBold: true }]}
      />
      <div className={'mt-[29px] flex'}>
        <Image src={selectedProduct.image} alt={selectedProduct.image} width={200} height={260} />
        <div className={'ml-[42px] w-full'}>
          <div className={'flex justify-between border-b border-primary-border-color pb-[15px]'}>
            <div>
              <p className={'font-black'}>{selectedProduct.title}</p>
              <div className={'flex'}>
                <Rating rate={selectedProduct.rating.rate} />
                <span className={'ml-[6px]'}>({selectedProduct.rating.count} rated)</span>
              </div>
            </div>
            <div>
              <button className={'flex items-center gap-[13px] rounded border py-[10px] pl-[22px] pr-[14.5px]'}>
                Add to favourite <FavouriteSvg />
              </button>
            </div>
          </div>
          <div className={'mt-[40px] flex'}>
            <div>
              <p className={'font-black'}>Description</p>
              <p className={'mt-[20px]'}>{selectedProduct.description}</p>
            </div>
            <div className={'ml-[70px]'}>
              <p className={'flex justify-end text-[20px] font-black'}>${selectedProduct.price}</p>
              <button className={'bg-primary-orange rounded px-[25px] py-2 text-white'}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetailWidget };
