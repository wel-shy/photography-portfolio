import styled from "styled-components";
import { ITheme, Paragraph } from "../../theme";

export const ThemedTag = styled(Paragraph)`
  display: inline-block;
  padding: 0.5em;
  transition: ${({ theme }: { theme: ITheme }) => theme.transition};
  border: 1px solid transparent;
  border-radius: 15px;
  margin: 0 5px 0 0;

  :hover {
    cursor: pointer;
    border: 1px solid black;
  }
`;

export const ActiveTag = styled(ThemedTag)`
  border: 1px solid black;
`;
