import React from "react";
import {
  Container,
  Inner,
  Paragraph,
  TextWrap,
  ImageWrap,
  TextCon,
} from "./style";
import { Button, Text } from "../../components";
import { thumbup } from "../../assets";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextWrap>
        <Text tex={"Contact me"} size={5} />
      </TextWrap>
      <Inner>
        <ImageWrap>
          <img src={thumbup} alt="" />
        </ImageWrap>
        <TextCon>
          <h2>Grab a cup of Coffee, I am available.</h2>
          <Paragraph>
            I would love to collaborate with you on your next project, you can
            shoot me a mail.
          </Paragraph>
          <a href="mailto:contact@princechijioke.com">
            <Button text={"Send me a message"} />
          </a>
        </TextCon>
      </Inner>
    </Container>
  );
};

export { ContactMe };
