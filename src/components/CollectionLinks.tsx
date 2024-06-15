import styled from "styled-components";
import { useCollectionsContext } from "../contexts/CollectionsContext";
import NavBar from "./NavBar";

const FlexWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const CollectionLink = styled.a<{ active: boolean }>`
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;

const useCollectionLinksController = () => {
  const { collections } = useCollectionsContext();

  return {
    collections,
  };
};

interface Props {
  selectedCollection: string;
}

const CollectionLinks = ({ selectedCollection }: Props) => {
  const { collections } = useCollectionLinksController();

  const CollectionItems = (
    <FlexWrapper>
      {collections.map((collection) => (
        <CollectionLink
          href={`/collections/${collection.id}`}
          active={selectedCollection === collection.id}
        >
          {collection.title}
        </CollectionLink>
      ))}
    </FlexWrapper>
  );

  return <NavBar LeftDetail={CollectionItems} />;
};

export default CollectionLinks;
