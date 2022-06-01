import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../colors";
export const Container = styled(motion.main)`
  height: 75vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 1300px) {
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
`;

export const AboutHeader = styled.div`
  margin: 0 auto;
  & > h1 {
    font-weight: 500;
    margin: 1rem 0;
    font-size: 2rem;
  }
  @media screen and (max-width: 1000px) {
    padding-top: 1rem;
    padding-bottom: 1.4rem;

    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */

  max-width: 1300px;
  gap: 3rem;
  height: fit-content;
  margin: auto;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 0rem;
  }
  @media screen and (max-width: 1300px) {
    width: 95%;
  }
`;

export const AboutImage = styled.img`
  width: 407px;
  height: 450px;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (min-width: 701px) and (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
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
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  width: 60%;
  font-size: 1rem;
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

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
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
