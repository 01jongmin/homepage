import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "../styles/colors";
import dimensions from "../styles/dimensions";

const HeaderContainer = styled("div")`
  padding-top: 1.75em;
  padding-bottom: 1em;
`;

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 400;
    font-size: 1em;
    height: 100%;
    padding-bottom: 1.25em;
    display: block;
    position: relative;
  }
`;

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 7em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    border-bottom: 3px solid transparent;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/" style={{ fontWeight: 600 }}>
          {"> ~"} {pathname}
        </Link>
        <HeaderLinks>
          <Link activeClassName="Link--is-active" to="/work">
            Work
          </Link>
          <Link activeClassName="Link--is-active" to="/courses">
            Courses
          </Link>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  );
}
