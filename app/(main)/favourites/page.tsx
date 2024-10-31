import { FC, lazy, Suspense } from 'react';
import { Header } from 'shared/ui/header';
import { Footer } from 'shared/ui/footer';

const Favourites: FC = () => {
  const FavouritesWidget = lazy(() =>
    import('widgets/favouritesWidget/ui').then((module) => ({ default: module.FavouritesWidget })),
  );
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading Favourites...</div>}>
        <FavouritesWidget />
      </Suspense>
      <Footer />
    </>
  );
};

export default Favourites;
