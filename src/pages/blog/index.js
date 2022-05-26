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
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331" />
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

  & > p:first-of-type {
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    padding: 15px 0;
    border: 1px solid red;
    text-align: start;
  }
`;
const OldPost = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;
const ImageWrap = styled.div`
  height: 60%;
  width: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
