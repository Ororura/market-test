import { FC } from 'react';

type Props = {
  sortByPrice: 'asc' | 'desc';
  setSortByPrice: (sortByPrice: 'asc' | 'desc' | ((prev: 'asc' | 'desc') => 'asc' | 'desc')) => void;
};

const PriceSort: FC<Props> = ({ sortByPrice, setSortByPrice }) => {
  const toggleSortByPrice = () => {
    setSortByPrice((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <p className={'mt-[30px] cursor-pointer'} onClick={toggleSortByPrice}>
      Price {sortByPrice === 'asc' ? '↑' : '↓'}
    </p>
  );
};

export { PriceSort };
