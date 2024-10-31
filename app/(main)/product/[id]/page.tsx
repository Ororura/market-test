import { FC } from 'react';
import { ProductDetailWidget } from 'widgets/productDetailWidget/ui';

type Props = {
  params: Promise<{ id: string }>;
};

const ProductDetail: FC<Props> = ({ params }) => {
  return <ProductDetailWidget params={params} />;
};

export default ProductDetail;
