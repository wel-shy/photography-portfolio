import React from 'react';
import { data } from 'react-router';
import BasePage from '../../components/BasePage/BasePage';
import Gallery from '../../components/Gallery';
import {
  getCollection,
  getCollectionPath,
  getCollections,
} from '../../lib/collections.server';
import pageMeta from '../../lib/pageMeta';
import type { Route } from './+types/Collection';

export const loader = async ({ params }: Route.LoaderArgs) => {
  const collection = await getCollection(params.id);

  if (!collection) {
    throw data(null, { status: 404 });
  }

  return {
    collection,
    canonicalPath: getCollectionPath(await getCollections(), collection.id),
  };
};

export const meta = ({ loaderData, params, location }: Route.MetaArgs) => {
  const collection = loaderData?.collection;

  // The home page shows the first collection but keeps the site's default title
  return pageMeta({
    pathname: loaderData?.canonicalPath ?? location.pathname,
    image: collection?.images[0],
    ...(params.id && collection
      ? {
          title: collection.title,
          description: `${collection.title} photography by Daniel Welsh.`,
        }
      : {}),
  });
};

const Collection = ({ loaderData }: Route.ComponentProps) => {
  const { collection } = loaderData;

  return (
    <BasePage>
      <Gallery images={collection.images} />
    </BasePage>
  );
};

export default Collection;
