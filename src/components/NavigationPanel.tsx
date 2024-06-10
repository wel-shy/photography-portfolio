import styled from "styled-components";
import { useCollectionsContext } from "../contexts/CollectionsContext";

const Wrapper = styled.div`
  min-width: 20vw;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

const NavigationItem = styled.li<{ isActive?: boolean }>`
  transition: ease all 0.2s;
  margin-bottom: 0.5em;
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};

  a {
    text-decoration: none;
    color: #020202;
  }

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const useNavigationPanelController = () => {
  const { collections } = useCollectionsContext();

  return {
    collections,
  };
};

const NavigationPanel = () => {
  const { collections } = useNavigationPanelController();

  return (
    <Wrapper>
      <ul>
        {collections.map(({ id, title }) => (
          <NavigationItem key={id}>
            <a href={`/collections/${id}`}>{title}</a>
          </NavigationItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default NavigationPanel;
