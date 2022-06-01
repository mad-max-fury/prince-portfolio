import styled from "styled-components";
import { colors } from "../../colors";

export const FootWrap = styled.div`
  height: 80px;
  width: 100%;

  & > div {
    width: 95%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;
export const FootIcons = styled.div`
  display: flex;
  gap: 3rem;
  color: ${colors.white};
  & a {
    transition: all 0.3s ease-in-out;
    color: ${colors.white};
    &:hover {
      transition: all 0.3s ease-in-out;
      color: ${colors.nav_link};
    }
  }
`;
export const FootText = styled.div`
  color: ${colors.white};

  font-size: 1rem;
  & a {
    text-decoration: none;
    font-size: 1rem;
    color: ${colors.nav_link};
    @media (max-width: 5400px) {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 5400px) {
    font-size: 0.9rem;
  }
`;
