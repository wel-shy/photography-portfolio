import React from "react";
import { setSelectedTag, clearSelectedTag } from "../../actions/gallery";
import { Container, Header2, Button } from "../../theme";
import {
  useGalleryDispatch,
  useGalleryState,
} from "../Contexts/GalleryContext";
import { GalleryItem } from "../GalleryItem";
import { Tag } from "../Tag";
import { GridContainer, TagsContainer, RightAlignWrapper } from "./styles";
import useHasMounted from "../../hooks/useHasMounted";

interface GalleryProps {
  items: { link: string; tags: string[]; title: string; id: string }[];
}

export const Gallery = ({ items }: GalleryProps) => {
  const dispatch = useGalleryDispatch();
  const { selectedTag } = useGalleryState();
  const hasMounted = useHasMounted();

  const tagToElement = (t: string) => (
    <Tag
      key={t}
      name={t}
      onSelect={() => setSelectedTag({ dispatch, selectedTag: t })}
      isSelected={t === selectedTag}
    />
  );

  const tags: string[] = [...new Set(items.map(({ tags }) => tags).flat())];

  const filterCondition = selectedTag
    ? ({ tags }: { tags: string[] }) => tags.includes(selectedTag)
    : () => true;

  return (
    <Container>
      <Header2>Gallery</Header2>
      {hasMounted ? (
        <>
          <TagsContainer>
            <div>{tags.map(tagToElement)}</div>
            <RightAlignWrapper>
              <Button onClick={() => clearSelectedTag({ dispatch })}>
                Clear
              </Button>
            </RightAlignWrapper>
          </TagsContainer>
          <GridContainer>
            {items.filter(filterCondition).map(({ link, title, id }, i) => (
              <GalleryItem link={link} key={i} title={title} id={id} />
            ))}
          </GridContainer>
        </>
      ) : null}
    </Container>
  );
};
