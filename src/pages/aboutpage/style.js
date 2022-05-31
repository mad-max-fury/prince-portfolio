import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../colors";
export const Container = styled(motion.main)`
  height: 75vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    height: fit-content;
    padding-bottom: 4rem;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 700px) {
  }
`;

export const AboutHeader = styled.div`
  margin: 0 auto;
  & > h1 {
    font-weight: 600;
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
  /* justify-content: space-between; */
  gap: 4rem;
  height: fit-content;
  margin: auto;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  width: 407px;
  height: 450px;
  border-radius: 15px;
  object-fit: cover;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 380px;
    margin: 0 auto;
  }
`;

export const AboutMeDetails = styled.p`
  color: gainsboro;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-weight: 300;
  font-family: Rubik;
  width: 60%;
  font-size: 1.6rem;
  font-style: normal;
  line-height: 25px;

  & a {
    color: ${colors.white};
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
  }

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
