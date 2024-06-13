import { ReactNode, createContext, useContext, useMemo } from "react";
import data from "../data.json";

export interface Image {
  url: string;
  title?: string;
  description?: string;
  id: string;
}

interface Collection {
  id: string;
  title: string;
  images: Image[];
}

interface CollectionsContextState {
  collections: Collection[];
}

const CollectionsContext = createContext<CollectionsContextState>(
  {} as CollectionsContextState
);

export const CollectionsProvider = ({ children }: { children: ReactNode }) => {
  const { collections } = data;
  const state = useMemo(() => ({ collections }), [collections]);

  return (
    <CollectionsContext.Provider value={state}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollectionsContext = () => useContext(CollectionsContext);
