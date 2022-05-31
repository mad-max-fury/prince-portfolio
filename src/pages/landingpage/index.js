import React from "react";
import { Button, Footer, Text } from "../../components";
import { motion } from "framer-motion";
import { Container, Inner, Paragraph } from "./style";
const LandingPage = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Inner>
        <div>
          <Text tex={"Hello"} />
          <Paragraph>
            I’m Prince Chijioke, a UX designer who is passionate about solving
            user’s problems and meeting client’s goal.
          </Paragraph>
        </div>
        <Button text={"View my Resume"} />
      </Inner>
    </Container>
  );
};

export { LandingPage };
