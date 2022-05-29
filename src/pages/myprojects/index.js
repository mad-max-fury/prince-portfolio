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
  PaginationWrap,
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
          <span>
            <Text tex={"My Projects"} size={3.5} />
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
          </span>
          {activeTab !== 1 && (
            <Paragraph>
              Few selected featured case studies I have worked on recently.
            </Paragraph>
          )}
        </WidgetWrap>
        <Main>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Main>
        {activeTab === 1 && (
          <PaginationWrap>
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span className="active">
              Next <span>{">>"}</span>
            </span>
          </PaginationWrap>
        )}
      </Inner>
    </Container>
  );
};

export { Projects };
