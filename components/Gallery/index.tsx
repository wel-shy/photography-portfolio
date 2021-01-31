import { useState } from "react";
import { Container, Header2 } from "../../theme";
import { GalleryItem } from "../GalleryItem";
import { Tag } from "../Tag";
import { GridContainer, TagsContainer } from "./styles";

interface GalleryProps {
  items: { link: string; tags: string[]; title: string; id: string }[];
}

export const Gallery = ({ items }: GalleryProps) => {
  const allTag = "All";
  const [selectedTag, setSelectedTag] = useState<string>(allTag);

  const tagToElement = (t: string) => (
    <Tag
      key={t}
      name={t}
      onSelect={() => setSelectedTag(t)}
      isSelected={t == selectedTag}
    />
  );

  const tags: string[] = [
    allTag,
    ...new Set(items.map(({ tags }) => tags).flat()),
  ];

  const filterCondition =
    selectedTag == allTag
      ? () => true
      : ({ tags }: { tags: string[] }) => tags.includes(selectedTag);

  return (
    <Container>
      <Header2>Gallery</Header2>
      <TagsContainer>{tags.map(tagToElement)}</TagsContainer>
      <GridContainer>
        {items.filter(filterCondition).map(({ link, title, id }, i) => (
          <GalleryItem link={link} key={i} title={title} id={id} />
        ))}
      </GridContainer>
    </Container>
  );
};
