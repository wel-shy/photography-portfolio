import styled from "styled-components";
import { useCollectionsContext } from "../contexts/CollectionsContext";
import { useNavigate } from "react-router-dom";
import Brand from "./Brand";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .select-wrapper {
    flex: 1;
  }
`;

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

  return (
    <Wrapper>
      <div className="select-wrapper">
        <Selector
          value={selectedCollection}
          onChange={(e) => {
            navigate(`/collections/${e.target.value}`);
          }}
        >
          {collections.map(({ id, title }) => (
            <option value={id}>{title}</option>
          ))}
        </Selector>
      </div>

      <Brand />
    </Wrapper>
  );
};

export default CollectionLinks;
