import styled from "styled-components";
import { ITheme } from "../../theme";

export const CircleImage = styled.img`
  border-radius: 50%;
  padding: 2.5%;

  @media ${({ theme }: { theme: ITheme }) => theme.breakpoints.mobile} {
    display: block;
    margin: 0 auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5%;

  @media ${({ theme }: { theme: ITheme }) => theme.breakpoints.mobile} {
    display: block;
  }
`;
