'use client';
import { FC, useEffect, useState } from 'react';
import { useGetProductByIdQuery } from 'entities/product/api';

type Props = {
  params: Promise<{ id: string }>;
};

const ProductDetail: FC<Props> = ({ params }) => {
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

  return <div></div>;
};

export default ProductDetail;

// {/*<h1>{selectedProduct.title}</h1>*/}
// {/*<p>Price: ${selectedProduct.price}</p>*/}
// {/*<p>Description: {selectedProduct.description}</p>*/}
// {/*<p>Category: {selectedProduct.category}</p>*/}
