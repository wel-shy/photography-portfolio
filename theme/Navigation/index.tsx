import React from "react";
import styled from "styled-components";
import { ITheme } from "..";
import Link from "next/link";

const Nav = styled.nav`
  border-bottom: 1px solid
    ${({ theme }) => (theme as ITheme).color.backgroundAlt};
  display: flex;
  padding: 0.5em 2em;
  height: 3em;
  width: 100%;
`;

const NavBarBrandAnchor = styled.a`
  border-radius: 15px;
  color: ${({ theme }) => (theme as ITheme).color.text.primary};
  cursor: pointer;
  display: block;
  font-weight: bold;
  height: 100%;
  line-height: 2em;
  padding: 0 0.5em;

  &:hover {
    color: ${({ theme }) => (theme as ITheme).color.text.header};
  }
`;

export const NavBarBrand = ({
  children,
  href,
}: {
  children: any;
  href: string;
}) => (
  <Link href={href}>
    <NavBarBrandAnchor>{children}</NavBarBrandAnchor>
  </Link>
);

const BrandWrapper = styled.div`
  height: 100%;
`;

interface NavBarProps {
  brand: JSX.Element;
  right?: JSX.Element;
  left?: JSX.Element;
}

export const NavBar = ({ brand, left, right }: NavBarProps) => (
  <Nav>
    <BrandWrapper>{brand}</BrandWrapper>
    <div>{right}</div>
    <div>{left}</div>
  </Nav>
);
