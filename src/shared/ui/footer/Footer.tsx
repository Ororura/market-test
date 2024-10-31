import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='mx-auto mt-auto flex min-h-[51px] w-full items-center bg-primary-footer-color px-4'>
      <div className='mx-auto w-[1280px]'>
        <p className={'text-[10px] text-white'}>© ООО “Gushop” 2002—2019. All rights reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
