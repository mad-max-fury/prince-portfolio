import styled from "styled-components";
import { colors } from "../../colors";
export const Container = styled.main`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 700px) {
  }
`;

export const AboutHeader = styled.div`
  margin: 0 auto;
  & > h1 {
    font-weight: 400;
    margin: 1rem 0;
  }
  @media screen and (max-width: 700px) {
    padding: 28px 0 37px;
    font-size: 1rem;
  }
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid red;
  height: fit-content;
  margin: auto;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  width: 407px;
  height: 441px;
  border-radius: 15px;
  border: 1px solid red;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 380px;
    margin: 0 auto;
  }
`;

export const AboutMeDetails = styled.p`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  text-align: start;
  font-weight: 400;
  border: 1px solid red;
  width: 60%;
  font-size: 16px;
  line-height: 2;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
    margin-top: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 40px;
`;

export const FooterWrapper = styled.div`
  padding: 4rem 0 1.5rem;
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
