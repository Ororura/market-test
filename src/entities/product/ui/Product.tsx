import { FC } from 'react';
import { ProductType } from 'entities/product/types';
import { FavouriteSvg } from 'shared/ui/svg';
import Image from 'next/image';

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <div>
      <div>
        <p>{product.category}</p>
        <p>{product.title}</p>
        <FavouriteSvg />
      </div>
      <Image width={200} height={100} src={product.image} alt={product.title} priority />
      <p>{product.price}</p>
    </div>
  );
};

export { Product };
