import { FC } from 'react';
import { useGetCategoriesQuery } from 'entities/product/api';

//TODO Прогресс бар
const Filters: FC = () => {
  const { data } = useGetCategoriesQuery();

  return (
    <div>
      <ul>
        {data?.map((category, idx) => (
          <li key={idx}>
            <p>{category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Filters };
