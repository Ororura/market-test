import { FC } from 'react';
import { ProductDetailWidget } from 'widgets/productDetailWidget/ui';
import { productApi } from 'entities/product/api';

type Props = {
  params: Promise<{ id: string }>;
};

const ProductDetail: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const product = await productApi.getProductById(id);
  return <ProductDetailWidget product={product} />;
};

export default ProductDetail;
