import Link from 'next/link';
import { FC } from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
  isBold?: boolean;
};

type BreadcrumbsProps = {
  className?: string;
  items: BreadcrumbItem[];
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className, items }) => (
  <nav className={className}>
    <ol className='flex space-x-2'>
      {items.map((item, index) => (
        <li key={index} className='flex items-center'>
          {item.href ? (
            <Link href={item.href} className={`${item.isBold ? 'font-bold' : ''} hover:underline`}>
              {item.label}
            </Link>
          ) : (
            <span className={item.isBold ? 'font-bold' : ''}>{item.label}</span>
          )}
          {index < items.length - 1 && <span className='mx-1'>{'>'}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
