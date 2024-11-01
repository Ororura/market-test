import { FC, lazy, Suspense } from 'react';
import { productApi } from 'entities/product/api';

type Props = {
  params: Promise<{ id: string }>;
};

const ProductDetail: FC<Props> = async ({ params }) => {
  const ProductDetailWidget = lazy(() =>
    import('widgets/productDetailWidget/ui').then((module) => ({ default: module.ProductDetailWidget })),
  );
  const { id } = await params;
  const product = await productApi.getProductById(id);
  return (
    <Suspense fallback={<div>Loading Product Details...</div>}>
      <ProductDetailWidget product={product} />
    </Suspense>
  );
};

export default ProductDetail;
