import { FC } from 'react';

type RatingProps = {
  rate: number;
};

const Rating: FC<RatingProps> = ({ rate }) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className='flex items-center space-x-1 text-[10px]'>
      {[...Array(fullStars)].map((_, i) => (
        <span className='text-primary-star-color' key={`full-${i}`}>
          &#9733;
        </span>
      ))}
      {hasHalfStar && <span className='text-primary-star-color'>&#9733;</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span className='text-primary-empy-star-color' key={`empty-${i}`}>
          &#9734;
        </span>
      ))}
    </div>
  );
};

export { Rating };
