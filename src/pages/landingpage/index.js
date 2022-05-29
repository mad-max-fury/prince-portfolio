import React from "react";
import { Button, Footer, Text } from "../../components";
import { Container, Inner, Paragraph } from "./style";
const LandingPage = () => {
  return (
    <Container>
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
