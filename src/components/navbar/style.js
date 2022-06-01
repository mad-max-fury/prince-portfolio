import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { colors } from "../../colors";

export const Nav = styled.nav`
  height: 96px;
  width: 100%;
  z-index: 10;
  background-color: ${colors.secondary_color};
  position: sticky;
  top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }
`;
export const NavLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  & > span {
    font-size: inherit;
  }
  &:hover {
    color: ${colors.nav_link};
    transition: all 0.3s ease-in-out;
    & > span {
      color: ${colors.nav_link};
      transition: all 0.3s ease-in-out;
    }
  }
  &.active {
    color: ${colors.nav_link};
    transition: all 0.3s ease-in-out;
    & > span {
      color: ${colors.nav_link};
      transition: all 0.3s ease-in-out;
    }
  }

  &.home {
    font-size: 1.25rem;
    font-weight: 600;
    & > h2 {
      font-size: inherit;
      font-weight: inherit;
      @media screen and (max-width: 540px) {
        font-size: 1.2rem;
        font-weight: 600;
        font-style: normal;
      }
    }
  }
`;
export const Bars = styled(RiMenu3Line)`
  display: none;
  color: ${colors.white};
  @media (max-width: 840px) {
    display: flex;
    cursor: pointer;
    font-size: 2.3rem;
    padding: 0 1rem;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  /* margin-right: 60px; */
  /*  */
  @media (max-width: 840px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 840px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 15px 32px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1.5px solid ${colors.nav_link};
  border-radius: 10px;
  font-family: "Rubik", sans-serif;
  & > h1 {
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 840px) {
    display: none;
  }
`;
