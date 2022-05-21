import React from "react";
import { Button, Footer, Text } from "../../components";
import { Container, Inner, Paragraph } from "./style";
const LandingPage = () => {
  return (
    <Container>
      <Inner>
        <Text tex={"Hello"} />
        <Paragraph>
          I’m Prince Chijioke, a UX designer who is passionate about solving
          user’s problems and meeting client’s goal.
        </Paragraph>
        <Button text={"View my Resume"} />
      </Inner>
      <Footer />
    </Container>
  );
};

export { LandingPage };
