import React, { useState } from "react";
import { Footer, ProjectCard, Text } from "../../components";
import {
  Container,
  Inner,
  Paragraph,
  WidgetWrap,
  Widget,
  Main,
  Tab,
} from "./style";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [projects, setProjects] = useState(Array(5).fill(0));

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <Container>
      <Inner>
        <WidgetWrap>
          <Text tex={"My Projects"} size={2.5} />
          <Widget>
            {["Featured Projects", "All Projects"].map((item, index) => (
              <Tab
                className={activeTab === index ? "active" : null}
                onClick={() => handleTabChange(index)}
              >
                {item}
              </Tab>
            ))}
          </Widget>
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
