import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding-top: 1em;
  font-style: italic;
`;

const PrivacyLink = styled.div`
  padding-top: 0.75em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <hr />
      <div>&copy; Daniel Welsh {new Date().getFullYear()}</div>
      <div>
        <a href="mailto:photography@welshy.net">photography@welshy.net</a>
      </div>
      <PrivacyLink>
        <a href="/privacy">Privacy</a>
      </PrivacyLink>
    </StyledFooter>
  );
};

export default Footer;
