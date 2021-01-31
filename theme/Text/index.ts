import styled from "styled-components";
import { ITheme } from "../";

export const Paragraph = styled.p`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.body};
`;

export const Title = styled.h1`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.header};
  margin-bottom: 0;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.primary};
  margin-top: 0;
`;

export const Header2 = styled.h2`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.header};
`;

export const TextLink = styled.a`
  color: ${({ theme }: { theme: ITheme }) => theme.color.text.primary};

  &:hover {
    color: ${({ theme }: { theme: ITheme }) => theme.color.text.header};
  }
`;
