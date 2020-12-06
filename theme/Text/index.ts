import styled from "styled-components";
import { ITheme } from "../";

export const Paragraph = styled.p`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.body};
`;
