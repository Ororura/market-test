import { FC } from 'react';

type FiltersProps = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
};

const Filters: FC<FiltersProps> = ({ categories, selectedCategories, setSelectedCategories }) => {
  const handleCheckboxChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className={'mt-[25px]'}>
      <p>Filters</p>
      <ul className={'mt-8'}>
        {categories?.map((category, idx) => (
          <li className={'mb-4'} key={idx}>
            <label>
              <input
                type='checkbox'
                className={'rounded-[3px] border-primary-check-box-color'}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <span className={'ml-[10px]'}>{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Filters };
