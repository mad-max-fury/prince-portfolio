import React, { useState } from "react";
import { compPImage, giftbg, ripplebg, shoppbg } from "../../assets";
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
    setActiveTab(0);
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
          <ProjectCard
            image={compPImage}
            title={"Dexplore"}
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
          <ProjectCard
            image={giftbg}
            title="Gift"
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
          <ProjectCard
            image={ripplebg}
            title="Ripple"
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
          <ProjectCard
            image={shoppbg}
            title="Shoppkings"
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
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
