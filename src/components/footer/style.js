import styled from "styled-components";
import { colors } from "../../colors";

export const FootWrap = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;
export const FootIcons = styled.div`
  display: flex;
  gap: 1.5rem;
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
