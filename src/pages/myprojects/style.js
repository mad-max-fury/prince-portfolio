import styled from "styled-components";
import { colors } from "../../colors";
import { patternBg } from "../../assets";
export const Container = styled.main`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  background-color: ${colors.main_color};
  background-image: url(${patternBg});
  /* background-size: contain; */
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  @media screen and (max-width: 700px) {
    object-fit: contain;
    background-size: cover;
  }
`;
