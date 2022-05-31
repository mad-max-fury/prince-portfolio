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
  height: ${({ isOpen }) => (isOpen ? "fit-content" : "0")};
  padding: 2rem 0;
  padding-top: unset;
  font-family: orbitron, sans-serif;

  background-color: ${colors.main_color};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 950px) {
    display: none;
  }
`;

export const NavLogoContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
  transition: all 0.3s ease-in-out;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  height: 70px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: fit-content;
  overflow: ${({ isOpen }) => (isOpen ? "unset" : "hidden")};
`;

export const CloseIcon = styled(VscClose)`
  color: #fff;
  font-size: 4rem;
  font-weight: 600;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
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
    & > h4 {
      font-size: inherit;
      font-weight: inherit;
      @media screen and (max-width: 540px) {
        font-size: 2.1rem;
        font-weight: 600;
        font-style: normal;
      }
    }
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
export const NavBtnLink = styled.a`
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;
