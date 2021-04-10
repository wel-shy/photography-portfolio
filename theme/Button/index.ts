import styled from "styled-components";
import { ITheme } from "..";

export const Button = styled.button`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.primary};
  padding: 0.5em;
  transition: ${({ theme }: { theme: ITheme }) => theme.transition};
  border: 1px solid
    ${({ theme }: { theme: ITheme }) => theme.color.text.primary};
  border-radius: 15px;
  margin: 0 5px 0 0;
  font-size: 1em;

  :hover {
    cursor: pointer;
    border: 1px solid black;
  }
`;
