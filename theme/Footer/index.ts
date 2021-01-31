import styled from "styled-components";
import { ITheme } from "..";

export const Footer = styled.footer`
  background-color: ${({ theme }) => (theme as ITheme).color.background};
  width: 100%;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
    max-height: 1em;
  }
`;
