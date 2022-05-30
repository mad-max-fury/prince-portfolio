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
  CurrentPostWrapper,
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
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              egestas elit suspendisse cursus nulla id leo morbi. Adipiscing
              tempus porta egestas vel curabitur ullamcorper. Nulla elit vel
              erat id.
            </h5>
          </CurrentPostWrapper>
          <OldPost>
            <RecentPostCard>
              <ImageThumbnail>
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331" />
              </ImageThumbnail>
              <TextWrap>
                <p>11th March 2022</p>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacinia ullamcorper sed sagittis nec.
                </h5>
              </TextWrap>
            </RecentPostCard>
            <RecentPostCard>
              <ImageThumbnail>
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331" />
              </ImageThumbnail>
              <TextWrap>
                <p>11th March 2022</p>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacinia ullamcorper sed sagittis nec.
                </h5>
              </TextWrap>
            </RecentPostCard>
            <RecentPostCard>
              <ImageThumbnail>
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331" />
              </ImageThumbnail>
              <TextWrap>
                <p>11th March 2022</p>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacinia ullamcorper sed sagittis nec.
                </h5>
              </TextWrap>
            </RecentPostCard>
          </OldPost>
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

const OldPost = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 48%;
  gap: 1.6rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid green;
  }
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
const RecentPostCard = styled.div`
  height: 16.1rem;
  width: 100%;
  border: 1px solid red;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 558px) {
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`;
const ImageThumbnail = styled.div`
  width: 30%;
  border: 1px solid red;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 558px) {
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`;
const TextWrap = styled.div`
  border: 1px solid red;
  width: 65%;
  height: fit-content;
  margin: auto;
  & > p {
    padding: 15px 0;
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;

    border: 1px solid red;
    text-align: start;
  }

  & > h5 {
    font-size: 20px;
    color: #fff;
    font-weight: 300;
  }
  @media screen and (max-width: 558px) {
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`;
