import styled from "styled-components";
import Brand from "../Brand";
import useCollectionLinksController from "./useCollectionLinksController";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .left {
    flex: 1;
    display: flex;
  }

  .divider, .link-item {
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
}

const NavBar = ({  }: Props) => {
  const {collectionLinks} = useCollectionLinksController()
  return (
    <Wrapper>
      <div className="left">
        <div className="left-detail">{collectionLinks.map((link) => <a className="link-item" href={link.link}>{link.title}</a>)}</div>
        <div className="divider">|</div>
        <a href="/contact"><div className="link-item">Contact</div></a>
      </div>
      <Brand />
    </Wrapper>
  );
};

export default NavBar;
