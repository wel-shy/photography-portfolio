import styled from "styled-components";
import { ITheme } from "..";

export const HorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    ${({ theme }) => (theme as ITheme).color.text.body},
    rgba(0, 0, 0, 0)
  );
`;
