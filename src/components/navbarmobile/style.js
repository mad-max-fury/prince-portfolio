import styled from "styled-components";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { colors } from "../../colors";
import { HashLink } from "react-router-hash-link";
export const NavBarMobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
  font-family: orbitron, sans-serif;

  background-color: ${colors.main_color};
  display: grid;
  align-items: center;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 950px) {
    display: none;
  }
`;

export const NavLogoContainer = styled.div``;

export const LogoContainer = styled.div`
  width: fit-content;
  height: 70px;
  position: relative;
  margin-top: -18px;
`;

export const CloseIcon = styled(VscClose)`
  color: #fff;
  font-size: 4rem;
  position: absolute;
  top: 100%;
  right: 25%;
  margin-top: 18px;
  font-weight: 600;
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
  grid-template-rows: repeat(3, 70px);
  text-align: start;
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 65px);
  }
`;
export const NavLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  padding-left: 2rem;
  color: ${colors.white};
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
    font-size: 3rem;
    font-weight: 600;
  }
`;
export const NavHashLink = styled(HashLink)`
  color: #fff;
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  font-size: 1.5rem;
  justify-content: start;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  padding-left: 2rem;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
  }
`;
export const NavBtnLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 2rem;
`;
export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;
