import { FC } from 'react';
import { Header } from 'shared/ui/header';
import { ProductWidget } from 'widgets/productWidget/ui';

const Home: FC = () => {
  return (
    <>
      <Header />
      <ProductWidget />
    </>
  );
};

export default Home;
