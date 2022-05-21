import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { colors } from "../../colors";

export const NavBarMobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 4rem);
  height: fit-content;
  font-family: "DM Sans", sans-serif;
  padding: 8rem 2rem;
  padding-bottom: 4rem;
  background-color: ${colors.secondary_color};
  display: grid;
  align-items: center;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 840px) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const NavBarLinksWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 45px);
  text-align: start;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 45px);
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  font-size: 3rem;
  justify-content: start;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.nav_link};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.nav_link};
    transition: all 0.3s ease-in-out;
  }
`;
export const NavBtnLinkWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;
