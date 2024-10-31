import { Header } from 'shared/ui/header';
import { Footer } from 'shared/ui/footer';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
