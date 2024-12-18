import { FC } from 'react';

const MagnifyingGlassSvg: FC = () => {
  return (
    <div>
      <svg
        width='19'
        height='19'
        viewBox='0 0 19 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <mask
          id='mask0_7_282'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='19'
          height='19'
        >
          <rect width='19' height='19' fill='url(#pattern0_7_282)' />
        </mask>
        <g mask='url(#mask0_7_282)'>
          <path d='M-6.5 -2H24.5V21H-6.5V-2Z' fill='#E6E6E6' />
        </g>
        <defs>
          <pattern id='pattern0_7_282' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image0_7_282' transform='scale(0.00666667)' />
          </pattern>
          <image
            id='image0_7_282'
            width='150'
            height='150'
            xlinkHref='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </div>
  );
};

export { MagnifyingGlassSvg };
