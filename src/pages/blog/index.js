import React, { useState } from "react";
import { Text } from "../../components";
import {
  Container,
  Inner,
  WidgetWrap,
  Widget,
  Main,
  Tab,
  PaginationWrap,
} from "./style";
import styled from "styled-components";

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <Container>
      <Inner>
        <WidgetWrap>
          <span>
            <Text tex={"My Blog"} size={4} />
            <Widget>
              {["Recent Post", "All Post"].map((item, index) => (
                <Tab
                  className={activeTab === index ? "active" : null}
                  onClick={() => handleTabChange(index)}
                >
                  {item}
                </Tab>
              ))}
            </Widget>
          </span>
        </WidgetWrap>
        <Main>
          <CurrentPostWrapper>
            <ImageWrap>
              <img />
            </ImageWrap>
            <p>11th March 2022</p>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia ullamcorper sed sagittis nec.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              egestas elit suspendisse cursus nulla id leo morbi. Adipiscing
              tempus porta egestas vel curabitur ullamcorper. Nulla elit vel
              erat id.
            </p>
          </CurrentPostWrapper>
          <OldPost></OldPost>
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

export { BlogPage };
const CurrentPostWrapper = styled.div`
  width: 50%;
  height: 75vh;
  border: 1px solid red;
`;
const OldPost = styled.aside`
  display: flex;
  flex-direction: column;
`;
const ImageWrap = styled.div``;
