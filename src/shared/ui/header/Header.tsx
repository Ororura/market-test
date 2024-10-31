import { FC } from 'react';
import { FavouriteSvg, LogoSvg } from 'shared/ui/svg';
import { MagnifyingGlassSvg } from 'shared/ui/svg';
import { M_PLUS_1p } from 'next/font/google';
const m_plus_1p = M_PLUS_1p({ subsets: ['latin'], weight: ['100', '300', '400'] });

const Header: FC = () => {
  return (
    <header className={'mx-auto max-w-7xl'}>
      <div className={'my-3 flex items-center justify-between'}>
        <LogoSvg />
        <div className={'max-w-[428px] rounded-[8px] border border-primary-border-color'}>
          <div className={'flex pb-[17px] pl-[25px] pr-[16.5px] pt-4'}>
            <input placeholder='Search' className='select-none outline-none' />
            <MagnifyingGlassSvg />
          </div>
        </div>
        <div className={'flex flex-col items-center'}>
          <FavouriteSvg />
          <p>Favourite</p>
        </div>
      </div>
      <div className={'border-b border-t border-primary-border-color'}>
        <ul className={`${m_plus_1p.className} my-[15px] flex gap-8`}>
          <li>
            <p>Main page</p>
          </li>
          <li>
            <p>Delivery</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
