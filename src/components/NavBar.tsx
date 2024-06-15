import { ReactNode } from "react";
import styled from "styled-components";
import Brand from "./Brand";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .left-detail {
    flex: 1;
  }

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    padding-bottom: 2em;
    align-items: end;
  }
`;

interface Props {
  LeftDetail: ReactNode;
}

const NavBar = ({ LeftDetail }: Props) => {
  return (
    <Wrapper>
      <div className="left-detail">{LeftDetail}</div>
      <Brand />
    </Wrapper>
  );
};

export default NavBar;
