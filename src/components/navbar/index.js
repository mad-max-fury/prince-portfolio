import React, { useState } from "react";
import { NavBarMobile } from "../navbarmobile";
import { Nav, NavLink, Bars, NavMenu } from "./style";
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
        <NavLink to="/blog" activeStyle>
          <span>Contact me</span>
        </NavLink>
      </NavMenu>
      <NavLink to="/" activeStyle className={"home"}>
        <span>Prince Chijioke</span>
      </NavLink>

      <Bars onClick={toggle} />
      <NavBarMobile toggle={toggle} isOpen={isOpen} />
    </Nav>
  );
};

export { Navbar };
