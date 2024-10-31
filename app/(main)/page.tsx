import { FC } from 'react';
import { Header } from 'shared/ui/header';
import { ProductWidget } from 'widgets/productWidget/ui';
import { Footer } from 'shared/ui/footer';

const Home: FC = () => {
  return (
    <>
      <Header />
      <ProductWidget />
      <Footer />
    </>
  );
};

export default Home;
