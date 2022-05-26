import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { colors } from "../../colors";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  background-color: ${colors.secondary_color};
`;
export const NavLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 3rem;

  &:hover {
    color: ${colors.nav_link};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.nav_link};
    transition: all 0.3s ease-in-out;
  }
  &.home {
    width: 55%;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.white};
  @media (max-width: 840px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    cursor: pointer;
    font-size: 3rem;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  border: 1px solid red;
  @media (max-width: 840px) {
    display: none;
  }
`;
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media (max-width: 840px) {
//     display: none;
//   }
// `;
// export const NavBtnLink = styled(Link)`
//   border-radius: 5px;
//   width: fit-content;
//   height: fit-content;
//   text-decoration: none;
// `;
