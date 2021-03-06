import styled from "styled-components";
import { ITheme } from "..";

export const Main = styled.main`
  background-color: ${({ theme }) => (theme as ITheme).color.background};
  min-height: 85vh;
`;
