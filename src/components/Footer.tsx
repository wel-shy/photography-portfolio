import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid grey;
  padding-top: 1em;
  font-style: italic;
  margin-top: 2em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>All content and photographs &copy; Daniel Welsh 2024</div>
    </StyledFooter>
  );
};

export default Footer;
