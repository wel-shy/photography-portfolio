import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-top: 1em;
  font-style: italic;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <hr />
      <div>All content and photographs &copy; Daniel Welsh 2024</div>
      <div>
        For all enquiries:{" "}
        <a href="mailto:photography@wel-shy.com">photography@wel-shy.com</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
