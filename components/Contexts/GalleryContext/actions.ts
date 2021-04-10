export enum GalleryActions {
  CLEAR_SELECTED_TAG,
  SET_SELECTED_TAG,
}

type ClearSelectedTagAction = {
  type: GalleryActions.CLEAR_SELECTED_TAG;
};

type SetSelectedTagAction = {
  type: GalleryActions.SET_SELECTED_TAG;
  payload: { selectedTag: string };
};

export type GalleryActionTypes = ClearSelectedTagAction | SetSelectedTagAction;
