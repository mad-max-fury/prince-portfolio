import styled from "styled-components";
import { colors } from "../../colors";
import { patternBg } from "../../assets";
export const Container = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1px solid red;
`;
export const Inner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 680px;
  margin: auto;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 32px;
`;
