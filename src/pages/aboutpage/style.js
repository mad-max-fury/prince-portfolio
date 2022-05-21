import styled from "styled-components";
import { colors } from "../../colors";
import { patternBg } from "../../assets";
export const Container = styled.main`
  height: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  border: 2px solid red;
  overflow-x: hidden;
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

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 700px) {
    
  }
`;

export const AboutHeader = styled.div`
  margin: 0 auto;
  padding: 42px 0 70px;
  font-weight: 400;
  @media screen and (max-width: 700px) {
    padding: 28px 0 37px;
   }
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;

  @media screen and (max-width: 700px) {
   flex-direction: column; 
  }
`;

export const AboutImage = styled.img`
  width: fit-object;
  // height: 70%;

  border-radius: 15px;

  @media screen and (max-width: 700px) {
    width: 90%;
    // height: 70%;
    margin: 0 auto;
  }
`;

export const AboutMeDetails = styled.p`
  font-size: 20px;
  color: ${colors.white};
  line-height: 32px;
  text-align: start;
  padding-left: 45px;
  display: flex;
  flex-direction: column;
  font-weight: 200;
  font-size: ;

  @media screen and (max-width: 700px) {
    padding: 30px 20px;
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
