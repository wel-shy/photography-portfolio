import { GalleryState } from ".";
import { GalleryActions, GalleryActionTypes } from "./actions";

export const reducer = (
  state: GalleryState,
  action: GalleryActionTypes
): GalleryState => {
  switch (action.type) {
    case GalleryActions.CLEAR_SELECTED_TAG:
      return { ...state, selectedTag: undefined };
    case GalleryActions.SET_SELECTED_TAG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
