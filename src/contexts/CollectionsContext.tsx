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

interface CollectionsContextState {
  collections: Collection[];
}

const CollectionsContext = createContext<CollectionsContextState>(
  {} as CollectionsContextState
);

export const CollectionsProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const state = useMemo(() => ({ collections }), [collections]);

  useEffect(() => {
    fetchCollections(setCollections);
  }, []);

  return (
    <CollectionsContext.Provider value={state}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollectionsContext = () => useContext(CollectionsContext);
