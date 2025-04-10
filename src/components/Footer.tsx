import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-top: 1em;
  font-style: italic;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <hr />
      <div>&copy; Daniel Welsh {new Date().getFullYear()}</div>
      <div>
        <a href="mailto:photography@welshy.net">photography@welshy.net</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
