import { FC } from 'react';
import { VectorDownSVG, VectorUpSvg } from 'shared/ui/svg';

type Props = {
  sortByPrice: 'asc' | 'desc';
  setSortByPrice: (sortByPrice: 'asc' | 'desc' | ((prev: 'asc' | 'desc') => 'asc' | 'desc')) => void;
};

const PriceSort: FC<Props> = ({ sortByPrice, setSortByPrice }) => {
  const toggleSortByPrice = () => {
    setSortByPrice((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className={'mt-[30px] flex items-center'} onClick={toggleSortByPrice}>
      <p className={'mr-[5px] cursor-pointer'}>Price</p>
      {sortByPrice === 'asc' ? <VectorUpSvg /> : <VectorDownSVG />}
    </div>
  );
};

export { PriceSort };
