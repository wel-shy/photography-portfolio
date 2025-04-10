import React from 'react';
import BasePage from '../../components/BasePage/BasePage';
import Gallery from '../../components/Gallery';
import useCollection from './useCollection';

const Collection = () => {
  const collection = useCollection();

  if (!collection) {
    return null;
  }

  return (
    <BasePage>
      <Gallery images={collection.images} />
    </BasePage>
  );
};

export default Collection;
