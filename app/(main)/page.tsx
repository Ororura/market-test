import { FC, lazy, Suspense } from 'react';
import { Header } from 'shared/ui/header';
import { Footer } from 'shared/ui/footer';
import { productApi } from 'entities/product/api';

const Home: FC = async () => {
  const data = await productApi.getProducts();
  const categories = await productApi.getCategories();
  const LazyProductWidget = lazy(() =>
    import('widgets/productWidget/ui').then((module) => ({ default: module.ProductWidget })),
  );

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading Products...</div>}>
        <LazyProductWidget products={data} categories={categories} />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
