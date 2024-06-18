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
        <a href="mailto:photography@wel-shy.com">photography@wel-shy.com</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
