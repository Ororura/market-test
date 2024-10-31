import { FC } from 'react';
import { Header } from 'shared/ui/header';
import { FavouritesWidget } from 'widgets/favouritesWidget/ui';
import { Footer } from 'shared/ui/footer';

const Favourites: FC = () => {
  return (
    <>
      <Header />
      <FavouritesWidget />
      <Footer />
    </>
  );
};

export default Favourites;
