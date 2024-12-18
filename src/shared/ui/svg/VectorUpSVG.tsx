import { FC } from 'react';

const VectorUpSvg: FC = () => {
  return (
    <div>
      <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_2_3)'>
          <path d='M1 4L4 0.999999L7 4' stroke='#333333' />
        </g>
        <defs>
          <clipPath id='clip0_2_3'>
            <rect width='8' height='5' fill='white' transform='translate(8 5) rotate(180)' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { VectorUpSvg };
