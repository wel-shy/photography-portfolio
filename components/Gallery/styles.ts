import styled from "styled-components";
import { ITheme } from "../../theme/";

const galleryItemWidth = 500;
const gapWitdh = 20;
const rows = 3;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 20px;
  margin: 0 auto;
  max-width: ${rows * galleryItemWidth + (rows - 1) * gapWitdh}px;
  transition: ${({ theme }: { theme: ITheme }) => theme.transition};

  @media ${({ theme }: { theme: ITheme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }: { theme: ITheme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TagsContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0;
  width: 100%;
`;

export const RightAlignWrapper = styled.div`
  text-align: right;
  width: 100%;
  flex: 1;
`;
