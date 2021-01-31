import styled from "styled-components";
import { ITheme } from "..";

export const Main = styled.main`
  background-color: ${({ theme }) => (theme as ITheme).color.background};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
