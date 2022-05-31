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
  NavLogoContainer,
  LogoContainer,
} from "./style";
const NavBarMobile = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBarMobileContainer isOpen={isOpen}>
        <NavLogoContainer isOpen={isOpen}>
          <LogoContainer>
            {" "}
            <NavLink to="/" activeStyle className={"home"} onClick={toggle}>
              <h2>Prince Chijioke</h2>
            </NavLink>
          </LogoContainer>
          <Icon>
            <CloseIcon onClick={toggle} />
          </Icon>
        </NavLogoContainer>

        <NavBarLinksWrapper>
          <NavLinks>
            <NavLink to="/about" onClick={toggle} activeStyle>
              <span>About</span>
            </NavLink>
            <NavLink to="/My-Project" activeStyle onClick={toggle}>
              <span>My Project</span>
            </NavLink>
            <NavLink to="/contact-me" activeStyle onClick={toggle}>
              <span>Contact me</span>
            </NavLink>
          </NavLinks>
          <NavBtnLinkWrap>
            <NavBtnLink
              href="http://princechijioke.medium.com"
              activeStyle
              onClick={toggle}
            >
              <Button filled={true} text={"Visit my blog"} />
            </NavBtnLink>
          </NavBtnLinkWrap>
        </NavBarLinksWrapper>
      </NavBarMobileContainer>
    </>
  );
};

export { NavBarMobile };
