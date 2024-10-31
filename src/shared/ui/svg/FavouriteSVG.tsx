import { FC } from 'react';

const FavouriteSvg: FC = () => {
  return (
    <div>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <mask
          id='mask0_6_53'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='20'
          height='20'
        >
          <rect width='20' height='20' fill='url(#pattern0_6_53)' />
        </mask>
        <g mask='url(#mask0_6_53)'>
          <path d='M-3.5 -2H22.5V21H-3.5V-2Z' fill='#333333' />
        </g>
        <defs>
          <pattern id='pattern0_6_53' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image0_6_53' transform='scale(0.00195312)' />
          </pattern>
          <image
            id='image0_6_53'
            width='512'
            height='512'
            xlinkHref='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </div>
  );
};

export { FavouriteSvg };
