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
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutWrapper>
        <AboutHeader>
          <Text tex="About Me" size={7} />
        </AboutHeader>

        <AboutDetails>
          <AboutImage src={compPrince} alt="Prince Ugbuta"></AboutImage>
          <AboutMeDetails>
            My name is Prince Chijioke Ugbuta a User Experience Designer
            passionate about building easy-to-use, user-friendly, and profitable
            digital products while solving users’ needs. <br />
            <br />
            My love for learning and quest for knowledge fueled my engagement
            with the prestigious Genesys Tech Hub where I successfully completed
            an intensive six months internship program. At Genesys, I learned
            more about collaboration in an agile development team. <br />
            <br />
            Over the years I have collaborated with different teams across the
            globe designing digital solutions in the fintech industry,
            blockchain industry, ecommerce industry, and lots more with a high
            understanding of usability. I have also explored blockchain
            technology and designed several experiences for web3 projects.
            <br />
            <br />
            When I am not designing on Figma, I design graphics in photoshop,
            develop WordPress websites, and share my ideas on my blog and design
            communities to aid beginners to learn.
            <ButtonContainer>
              <a
                href="https://drive.google.com/file/d/188ryywtmKnOkHc17rTQ3QuIDn2ytXhgD/view"
                target={"_blank"}
              >
                <Button text={"View my Resume"} />
              </a>
            </ButtonContainer>
          </AboutMeDetails>
        </AboutDetails>
      </AboutWrapper>
    </Container>
  );
};

export { AboutMe };
