import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .left {
    flex: 1;
    display: flex;
  }

  .divider {
    margin-right: 1em;
    font-weight: bold;
  }

  @media (max-width: 750px) {
    padding-bottom: 2em;
    align-items: end;
    display: flex;
    flex-direction: column-reverse;

    .left-detail {
      display: flex;
      flex-direction: column;
    }

    .divider {
      display: none;
    }

    .left {
      flex-direction: column;
    }
  }
`;

export const LinkItem = styled(Link)<{ active?: boolean }>`
  margin-right: 1em;
  font-weight: bold;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  @media (max-width: 750px) {
    text-align: right;
    margin-right: 0;
    margin-bottom: 1em;
  }
`;
