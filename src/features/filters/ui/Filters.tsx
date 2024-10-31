import { FC } from 'react';
import { useGetCategoriesQuery } from 'entities/product/api';

//TODO Прогресс бар
const Filters: FC = () => {
  const { data } = useGetCategoriesQuery();

  return (
    <div className={'mt-[25px]'}>
      <p>Filters</p>
      <ul className={'mt-8'}>
        {data?.map((category, idx) => (
          <li className={'mb-4'} key={idx}>
            <label>
              <input type='checkbox' className={'border-primary-check-box-color rounded-[3px]'} value={idx} />
              <span className={'ml-[10px]'}>{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Filters };
