import { ReactNode } from "react";
import styled from "styled-components";
import Brand from "./Brand";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .left {
    flex: 1;
    display: flex;
  }

  .contact, .divider {
    margin-left: 1em;
    font-weight: bold;
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
      <div className="left">
        <div className="left-detail">{LeftDetail}</div>
        <div className="divider">|</div>
        <a href="/contact"><div className="contact">Contact</div></a>
      </div>
      <Brand />
    </Wrapper>
  );
};

export default NavBar;
