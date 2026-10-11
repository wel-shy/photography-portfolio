import React from 'react';

import styled from 'styled-components';
import BasePage from '../../components/BasePage/BasePage';
import pageMeta from '../../lib/pageMeta';
import type { Route } from './+types/ContactPage';

const ContactLink = styled.div`
  cursor: pointer;
  margin-bottom: 1em;
`;

export const meta = ({ location }: Route.MetaArgs) =>
  pageMeta({
    pathname: location.pathname,
    title: 'Contact',
    description:
      'Get in touch with Daniel Welsh via Instagram, email or Bluesky.',
  });

const ContactPage = () => {
  return (
    <BasePage>
      <ContactLink>
        <a
          target="_blank"
          href="https://www.instagram.com/wel__shy/"
          rel="noreferrer"
        >
          Instagram
        </a>
      </ContactLink>
      <ContactLink>
        <a
          target="_blank"
          href="mailto:photography@welshy.net"
          rel="noreferrer"
        >
          Email
        </a>
      </ContactLink>
      <ContactLink>
        <a
          target="_blank"
          href="https://bsky.app/profile/wel-shy.bsky.social"
          rel="noreferrer"
        >
          BlueSky
        </a>
      </ContactLink>
    </BasePage>
  );
};

export default ContactPage;
