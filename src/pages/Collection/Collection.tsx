import React from 'react';
import { useParams } from 'react-router-dom';
import BasePage from '../../components/BasePage/BasePage';
import Gallery from '../../components/Gallery';
import useCollection from './useCollection';
import usePageMeta from '../../usePageMeta';

const Collection = () => {
  const { id } = useParams();
  const collection = useCollection();

  // The home page shows the first collection but keeps the site's default title
  usePageMeta(
    id && collection
      ? {
          title: collection.title,
          description: `${collection.title} photography by Daniel Welsh.`,
        }
      : {}
  );

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
