import React from 'react';
import styled from 'styled-components';
import BasePage from '../../components/BasePage/BasePage';
import usePageMeta from '../../usePageMeta';

const Content = styled.section`
  max-width: 45em;
  line-height: 1.6;

  h2 {
    font-weight: 400;
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.5em;
  }
`;

const PrivacyPage = () => {
  usePageMeta({
    title: 'Privacy',
    description:
      'How personal data is handled when you visit Daniel Welsh Photography.',
  });

  return (
    <BasePage>
      <Content>
        <h2>Privacy</h2>
        <p>
          This site is a personal photography portfolio. It does not use
          cookies, analytics scripts, advertising or tracking of any kind.
        </p>

        <h3>Who is responsible</h3>
        <p>
          Daniel Welsh is responsible for this site. For any question about your
          data, email{' '}
          <a href="mailto:photography@welshy.net">photography@welshy.net</a>.
        </p>

        <h3>Hosting</h3>
        <p>
          The site is hosted by Netlify, Inc. and its images are delivered by
          Cloudflare, Inc. When you visit, your browser sends these providers
          your IP address, the page or image requested, and details such as your
          browser type. They process this on my behalf in order to deliver the
          site and keep it secure, which is my legitimate interest under Art.
          6(1)(f) GDPR.
        </p>
        <p>
          Both providers are based in the United States and act under data
          processing agreements that include the EU standard contractual
          clauses. I only see aggregated statistics from them, such as the
          number of requests per country.
        </p>

        <h3>Browser storage</h3>
        <p>
          To make pages load faster, the site saves the camera details of the
          photos you have viewed in your browser&apos;s local storage. This
          stays on your device, is not sent anywhere, and can be removed by
          clearing the site data in your browser.
        </p>

        <h3>Email and external links</h3>
        <p>
          If you email me, I use your address and message only to reply. The
          contact page links to Instagram and Bluesky; those services apply
          their own privacy policies once you follow a link.
        </p>

        <h3>Your rights</h3>
        <p>
          Under the GDPR you can ask for access to the personal data held about
          you, have it corrected or deleted, restrict or object to its
          processing, and lodge a complaint with a data protection authority.
        </p>
      </Content>
    </BasePage>
  );
};

export default PrivacyPage;
