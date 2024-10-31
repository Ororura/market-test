'use client';
import { FC, useEffect, useState } from 'react';
import { useGetProductByIdQuery } from 'entities/product/api';
import Breadcrumbs from 'shared/ui/breadcrumbs/ui/Breadcrumbs';
import Image from 'next/image';
import { Rating } from 'shared/ui/rating';

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
    <div className={'mx-auto max-w-7xl px-[170px]'}>
      <Breadcrumbs
        className='mt-16'
        items={[{ label: 'Main' }, { label: 'Catalog', href: '/' }, { label: selectedProduct.title, isBold: true }]}
      />
      <div className={'mt-[29px] flex'}>
        <Image src={selectedProduct.image} alt={selectedProduct.image} width={200} height={260} />
        <div className={'ml-[42px]'}>
          <p>{selectedProduct.title}</p>
          <div className={'flex'}>
            <Rating rate={selectedProduct.rating.rate} />
            <span className={'ml-[6px]'}>({selectedProduct.rating.count} rated)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetailWidget };

// {/*<h1>{selectedProduct.title}</h1>*/}
// {/*<p>Price: ${selectedProduct.price}</p>*/}
// {/*<p>Description: {selectedProduct.description}</p>*/}
// {/*<p>Category: {selectedProduct.category}</p>*/}
