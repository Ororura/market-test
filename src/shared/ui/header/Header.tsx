import { FC } from 'react';
import { FavouriteSvg, LogoSvg } from 'shared/ui/svg';
import { MagnifyingGlassSvg } from 'shared/ui/svg';

const Header: FC = () => {
  return (
    <div>
      <div className={'mx-auto mt-3 flex max-w-7xl items-center justify-between'}>
        <LogoSvg />
        <div className={'border-primary-border-color max-w-[428px] rounded-[8px] border'}>
          <div className={'flex pb-[17px] pl-[25px] pr-[16.5px] pt-4'}>
            <input placeholder='Search' />
            <MagnifyingGlassSvg />
          </div>
        </div>
        <div className={'flex flex-col items-center'}>
          <FavouriteSvg />
          <p>Favourite</p>
        </div>
      </div>
      <div className={'border-primary-border-color border-b border-t'}>
        <ul className={'flex'}>
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
    </div>
  );
};

export { Header };
