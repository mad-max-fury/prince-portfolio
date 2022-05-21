import React from "react";
import { Button } from "../button";
import {
  NavBarMobileContainer,
  CloseIcon,
  Icon,
  NavBarLinksWrapper,
  NavLinks,
  NavLink,
  NavBtnLinkWrap,
  NavBtnLink,
} from "./style";
const NavBarMobile = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBarMobileContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
        <NavBarLinksWrapper>
          <NavLinks>
            <NavLink to="/about" activeStyle>
              <span>About</span>
            </NavLink>
            <NavLink to="/My-Project" activeStyle>
              <span>Projects</span>
            </NavLink>
            <NavLink to="/blog" activeStyle>
              <span>Blog</span>
            </NavLink>
          </NavLinks>
        </NavBarLinksWrapper>
      </NavBarMobileContainer>
    </>
  );
};

export { NavBarMobile };
