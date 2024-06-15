import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import fetchCollections from "../fetchCollections";
import { Collection } from "../lib/types";
import useCachedImageLookup from "./useCachedImageLookup";

interface CollectionsContextState {
  collections: Collection[];
}

const CollectionsContext = createContext<CollectionsContextState>(
  {} as CollectionsContextState
);

export const CollectionsProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const state = useMemo(() => ({ collections }), [collections]);
  const imageExifLookup = useCachedImageLookup(collections);

  useEffect(() => {
    if (!imageExifLookup || collections.length) {
      return;
    }

    fetchCollections(imageExifLookup, setCollections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageExifLookup]);

  return (
    <CollectionsContext.Provider value={state}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollectionsContext = () => {
  const context = useContext(CollectionsContext);

  if (!context) {
    throw new Error("Context must be used within a CollectionsProvider");
  }

  return context;
};
