import React from 'react';

import { useLocation, useRouteLoaderData } from 'react-router';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import Brand from '../Brand';
import { usePreferencesContext } from '../../contexts/PreferencesContext/PreferencesContext';
import { Themes } from '../../theme';
import { IconWrapper, LinkItem, Wrapper } from './styles';
import type { loader } from '../../root';

const NavBar = () => {
  // Missing when the root loader itself failed
  const { collectionLinks } = useRouteLoaderData<typeof loader>('root') ?? {
    collectionLinks: [],
  };
  const { pathname } = useLocation();
  const currentPath = pathname.replace(/\/+$/, '') || '/';
  const { theme, toggleTheme } = usePreferencesContext();

  return (
    <Wrapper>
      <div className="left">
        <div className="left-detail">
          {collectionLinks.map(({ link, title, id }) => (
            <LinkItem
              to={link}
              active={
                currentPath === link || currentPath === `/collections/${id}`
              }
              key={id}
            >
              {title}
            </LinkItem>
          ))}
        </div>
        <div className="divider">|</div>
        <LinkItem active={pathname.includes('/contact')} to="/contact">
          <div>Contact</div>
        </LinkItem>
        <div className="divider">|</div>
        <IconWrapper onClick={() => toggleTheme()}>
          {theme === Themes.Light ? <MoonOutlined /> : <SunOutlined />}
        </IconWrapper>
      </div>
      <Brand />
    </Wrapper>
  );
};

export default NavBar;
