import Link from 'next/link';
import { FC } from 'react';

type BreadcrumbsProps = {
  className?: string;
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => (
  <nav className={className}>
    <ol className='flex space-x-2'>
      <li>
        <span>Main</span>
      </li>
      <li>{'>'}</li>
      <li>
        <Link href='/' className='font-bold hover:underline'>
          Catalog
        </Link>
      </li>
    </ol>
  </nav>
);

export default Breadcrumbs;
