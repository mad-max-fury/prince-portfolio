import React from "react";
import {
  Container,
  AboutWrapper,
  AboutHeader,
  AboutDetails,
  AboutImage,
  AboutMeDetails,
  ButtonContainer,
} from "./style";
import { Text, Button } from "../../components";
import { compPrince } from "../../assets";

const AboutMe = () => {
  return (
    <Container>
      <AboutWrapper>
        <AboutHeader>
          <Text tex="About Me" size={7} />
        </AboutHeader>

        <AboutDetails>
          <AboutImage src={compPrince} alt="Prince Ugbuta"></AboutImage>
          <AboutMeDetails>
            My name is Prince Chijioke Ugbuta from the Eastern part of Nigeria
            and I'm passionate about building easy-to-use and profitable digital
            products while solving user’s needs. <br />
            <br />
            I’m a Google Certified UI/UX designer with an experience in working
            effectively with teams across the globe designing usable and swift
            user experience. I have also explored the blockchain technology and
            desiged several experiences for web 3 projects. <br />
            <br />
            With a problem-solving mindset, I help my clients to create designs
            that are aesthetically pleasing, technically refined and easy to
            use. I enjoy empathizing with people and crafting digital
            experiences, that empower users and boost business growth.
            <br />
            <br />
            With a problem-solving mindset, I help my clients to create designs
            that are aesthetically pleasing, technically refined and easy to
            use.
            <ButtonContainer>
              <Button text={"View my Resume"} />
            </ButtonContainer>
          </AboutMeDetails>
        </AboutDetails>
      </AboutWrapper>
    </Container>
  );
};

export { AboutMe };
