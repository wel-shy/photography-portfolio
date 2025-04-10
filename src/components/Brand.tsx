import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 4em;
  font-style: italic;
  text-align: right;

  @media (max-width: 750px) {
    font-size: 1.75em;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <H1 onClick={() => navigate('/')}>Daniel Welsh</H1>
    </div>
  );
};

export default Brand;
