import styled from "styled-components";
import { useCollectionsContext } from "../contexts/CollectionsContext";

const Wrapper = styled.div`
  min-width: 20vw;
  ul {
    list-style-type: none;
  }

  li {
    transition: ease all 0.2s;
    margin-bottom: 0.5em;

    a {
      text-decoration: none;
      color: #020202;
    }
  }

  li:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const NavigationPanel = () => {
  const { collections } = useCollectionsContext();

  return (
    <Wrapper>
      <ul>
        {collections.map(({ id, title }) => (
          <li key={id}>
            <a href={`/collections/${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default NavigationPanel;
