import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  gap: 1rem;
  height: 70vh;
  @media screen and (max-width: 700px) {
    height: 90vh;
    padding-top: 1rem;
  }
`;
export const Inner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  max-width: 680px;
  margin: auto;
  & > h2 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    color: ${colors.white};
    font-family: "Kanit", sans-serif;
  }
`;
export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 32px;
  font-family: "Kanit", sans-serif;
  color: #f0f0f0;
`;
export const TextWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 680px;
  margin: 0 auto;
  & > h1 {
    font-weight: 600;
  }
`;
export const ImageWrap = styled.div`
  height: 200px;
  width: 200px;
  /* padding-bottom: 1.5rem; */
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const TextCon = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  max-width: 680px;
  margin: auto;
  & > h2 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    color: ${colors.white};
    font-family: "Kanit", sans-serif;
  }
  & > p {
    padding-bottom: 2rem;
  }
`;
