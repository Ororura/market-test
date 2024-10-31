import { FC } from 'react';
import { Header } from 'shared/ui/header';
import { ProductWidget } from 'widgets/productWidget/ui';
import { Footer } from 'shared/ui/footer';
import { productApi } from 'entities/product/api';

const Home: FC = async () => {
  const data = await productApi.getProducts();
  const categories = await productApi.getCategories();

  return (
    <>
      <Header />
      <ProductWidget products={data} categories={categories} />
      <Footer />
    </>
  );
};

export default Home;
