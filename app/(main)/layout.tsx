import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { StoreProvider } from 'app/providers/store';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Gushop',
  description: 'Discover unique products and enjoy an exceptional shopping experience at Gushop!',
};

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'black',
    },
  ],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={` ${satoshi.className} text-[14px] antialiased`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
