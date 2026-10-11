import React from 'react';

import { Link } from 'react-router';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 4em;
  font-style: italic;
  text-align: right;

  @media (max-width: 750px) {
    font-size: 1.75em;
  }

  a,
  a:hover {
    color: inherit;
  }
`;

const Brand = () => {
  return (
    <div>
      <H1>
        <Link to="/">Daniel Welsh</Link>
      </H1>
    </div>
  );
};

export default Brand;
