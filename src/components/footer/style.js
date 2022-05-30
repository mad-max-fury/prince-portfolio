import styled from "styled-components";
import { colors } from "../../colors";

export const FootWrap = styled.div`
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  @media (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 1.6rem;
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

  font-size: 1.5rem;
  & span {
    font-size: 1.5rem;
    color: ${colors.nav_link};
  }
`;
