import styled from "styled-components";
import { ITheme } from "../../theme";
interface TagProps {
  isActive: boolean;
}

export const ThemedTag = styled.div<TagProps>`
  display: inline-block;
  padding: 0.5em;
  transition: ${({ theme }: { theme: ITheme }) => theme.transition};
  border: 1px solid
    ${({ isActive, theme }) =>
      isActive ? (theme as ITheme).color.text.body : "transparent"};
  border-radius: 15px;
  margin: 0 5px 0 0;

  :hover {
    cursor: pointer;
    border: 1px solid black;
  }
`;
