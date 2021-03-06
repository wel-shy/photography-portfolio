import styled from "styled-components";
import { ITheme } from "..";

export const Footer = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => (theme as ITheme).color.background};
  border-top: 1px solid ${({ theme }) => (theme as ITheme).color.backgroundAlt};
  justify-content: center;
  min-height: 15vh;
  width: 100%;

  img {
    margin-left: 0.5rem;
    max-height: 1em;
  }
`;
