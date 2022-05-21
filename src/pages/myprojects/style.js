import styled from "styled-components";
import { colors } from "../../colors";
import { patternBg } from "../../assets";
export const Container = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  background-color: ${colors.main_color};
  background-image: url(${patternBg});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    object-fit: contain;
    background-size: cover;
    height: fit-content;
  }
`;
export const Inner = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
`;
export const Paragraph = styled.p``;

export const WidgetWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
`;
export const Widget = styled.div`
  width: fit-content;
  display: flex;
  gap: 1rem;
`;
export const Main = styled.main`
  height: 90%;
`;

export const Tab = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`;
