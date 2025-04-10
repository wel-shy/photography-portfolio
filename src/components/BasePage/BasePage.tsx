import React, { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';

interface Props {
  children: ReactNode;
}

const BasePage = ({ children }: Props) => {
  return (
    <article>
      <NavBar />
      {children}
    </article>
  );
};

export default BasePage;
