import React from 'react';

import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Brand from '../Brand';
import useCollectionLinksController from './useCollectionLinksController';

const Wrapper = styled.div`
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

const LinkItem = styled.a<{ active?: boolean }>`
  margin-right: 1em;
  font-weight: bold;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  @media (max-width: 750px) {
    text-align: right;
    margin-right: 0;
    margin-bottom: 1em;
  }
`;

const NavBar = () => {
  const { collectionLinks } = useCollectionLinksController();
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <div className="left">
        <div className="left-detail">
          {collectionLinks.map(({ link, title, id }) => (
            <LinkItem
              href={link}
              active={
                pathname.includes(link) ||
                (pathname === '/' && id === 'Cityscapes')
              }
              key={id}
            >
              {title}
            </LinkItem>
          ))}
        </div>
        <div className="divider">|</div>
        <LinkItem active={pathname.includes('/contact')} href="/contact">
          <div>Contact</div>
        </LinkItem>
      </div>
      <Brand />
    </Wrapper>
  );
};

export default NavBar;
