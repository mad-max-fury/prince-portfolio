import React from "react";
import { Footer, ProjectCard, Text } from "../../components";
import { Container, Inner, Paragraph, WidgetWrap, Widget, Main } from "./style";

const Projects = () => {
  return (
    <Container>
      <Inner>
        <WidgetWrap>
          <Text tex={"My Projects"} size={"4rem"} />
          <Widget></Widget>
          <Paragraph>
            Few selected featured case studies I have worked on recently.
          </Paragraph>
        </WidgetWrap>
        <Main>
          <ProjectCard />
        </Main>
      </Inner>
      <Footer />
    </Container>
  );
};

export { Projects };
