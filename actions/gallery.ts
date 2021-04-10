import {
  GalleryDispatch,
  GalleryActions,
} from "../components/Contexts/GalleryContext/";

export const clearSelectedTag = ({
  dispatch,
}: {
  dispatch: GalleryDispatch;
}) => {
  dispatch({ type: GalleryActions.CLEAR_SELECTED_TAG });
};

export const setSelectedTag = ({
  selectedTag,
  dispatch,
}: {
  selectedTag: string;
  dispatch: GalleryDispatch;
}) => {
  dispatch({ type: GalleryActions.SET_SELECTED_TAG, payload: { selectedTag } });
};
