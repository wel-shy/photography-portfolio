import styled from "styled-components";
import { useCollectionsContext } from "../contexts/CollectionsContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Selector = styled.select`
  background-color: transparent;
  border: none;
  font-size: 1em;
  font-weight: bold;
  text-align: left;
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
  const navigate = useNavigate();

  const CollectionsSelector = (
    <Selector
      value={selectedCollection}
      onChange={(e) => {
        navigate(`/collections/${e.target.value}`);
      }}
    >
      {collections.map(({ id, title }) => (
        <option value={id} key={id}>
          {title}
        </option>
      ))}
    </Selector>
  );

  return <NavBar LeftDetail={CollectionsSelector} />;
};

export default CollectionLinks;
