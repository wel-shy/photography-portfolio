import styled from "styled-components";
import { ITheme } from "../../theme";

export const GalleryImageContainer = styled.div`
  opacity: 1;
  transition: ${({ theme }: { theme: ITheme }) => theme.transition};
  position: relative;

  :hover {
    span {
      display: inline-block;
      opacity: 1;
      color: white;
    }

    .overlay {
      opacity: 0.4;
    }

    cursor: pointer;
  }

  span {
    position: absolute;
    bottom: 1em;
    left: 16px;
    z-index: 999999;
    opacity: 0;
  }

  .overlay {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    background-color: #222222;
    z-index: 10;
    opacity: 0;

    bottom: 0;

    transition: ${({ theme }: { theme: ITheme }) => theme.transition};
  }
`;
