/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React from 'react';

import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import Brand from '../Brand';
import useCollectionLinksController from './useCollectionLinksController';
import { usePreferencesContext } from '../../contexts/PreferencesContext/PreferencesContext';
import { Themes } from '../../theme';
import { IconWrapper, LinkItem, Wrapper } from './styles';

const NavBar = () => {
  const { collectionLinks } = useCollectionLinksController();
  const { pathname } = useLocation();
  const { theme, toggleTheme } = usePreferencesContext();

  return (
    <Wrapper>
      <div className="left">
        <div className="left-detail">
          {collectionLinks.map(({ link, title, id }) => (
            <LinkItem
              to={link}
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
