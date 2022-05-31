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
            Paragraph={
              "Dexplore is an AI-driven data aggregation platform for tokens deployed on the Cardano & Milkomeda networks providing holistic analysis and tracking capabilities for each given asset."
            }
            image={compPImage}
            title={"Dexplore"}
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
          <ProjectCard
            Paragraph={
              "A platform that allows users to gift each other Non-fungible tokens (NFT) as a means of settlement. "
            }
            image={giftbg}
            title="GiftNft"
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
          <ProjectCard
            Paragraph={
              "An all-in-one store that handles your delivery, collects payments, manages orders, with business analytics."
            }
            image={ripplebg}
            title="Ripples"
            classn={"disabled"}
            btnText={"Casestudy coming soon"}
          />
          <ProjectCard
            Paragraph={
              "A platform that allows business owners to list and sell their products likewise freelancers to sell their services."
            }
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
