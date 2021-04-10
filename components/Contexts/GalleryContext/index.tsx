import React, { createContext, useReducer, useEffect, useContext } from "react";
import usePersistedState from "../../../hooks/usePersistedState";
import { GalleryActionTypes } from "./actions";
import { reducer } from "./reducer";

export { GalleryActions } from "./actions";

export interface GalleryState {
  selectedTag?: string;
}

const initialGalleryState: GalleryState = {
  selectedTag: undefined,
};

export type GalleryDispatch = (action: GalleryActionTypes) => void;

const GalleryStateContext = createContext<GalleryState | undefined>(
  initialGalleryState
);
const GalleryDispatchContext = createContext<GalleryDispatch | undefined>(
  undefined
);

const GalleryProvider = ({ children }: { children: any }) => {
  const key = "galleryState";
  const [persitedState, setPersistedState] = usePersistedState(
    initialGalleryState,
    key
  );
  const [state, dispatch] = useReducer(reducer, persitedState);

  useEffect(() => {
    setPersistedState(state);
  }, [state, setPersistedState]);

  return (
    <GalleryStateContext.Provider value={state}>
      <GalleryDispatchContext.Provider value={dispatch}>
        {children}
      </GalleryDispatchContext.Provider>
    </GalleryStateContext.Provider>
  );
};

const setupError = new Error("Must be used within a GalleryProvider");

const useGalleryState = () => {
  const context = useContext(GalleryStateContext);
  if (!context) {
    throw setupError;
  }

  return context;
};

const useGalleryDispatch = () => {
  const context = useContext(GalleryDispatchContext);
  if (!context) {
    throw setupError;
  }

  return context;
};

export { GalleryProvider, useGalleryState, useGalleryDispatch };
