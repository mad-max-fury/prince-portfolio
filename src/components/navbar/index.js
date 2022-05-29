import React, { useState } from "react";
import { NavBarMobile } from "../navbarmobile";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./style";
import styled from "styled-components";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/about" activeStyle>
          <span>About</span>
        </NavLink>
        <NavLink to="/My-Project" activeStyle>
          <span>My Project</span>
        </NavLink>
        <NavLink to="/contact-me" activeStyle>
          <span>Contact me</span>
        </NavLink>
      </NavMenu>
      <NavBtnWraps>
        <NavLink to="/" activeStyle className={"home"}>
          <h2>Prince Chijioke</h2>
        </NavLink>
        <NavBtnLink to="/blog" activeStyle>
          <h1>Visit my blog</h1>
        </NavBtnLink>
      </NavBtnWraps>

      <Bars onClick={toggle} />
      <NavBarMobile toggle={toggle} isOpen={isOpen} />
    </Nav>
  );
};

export { Navbar };

const NavBtnWraps = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
  align-items: center;
`;
