import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

import {
  FeatureCardWrapper,
  FeatureCardIcon,
  FeatureCardTitle,
  FeatureCardDescription,
} from "./style";
const ProjectCard = ({ id, image, title, desc }) => {
  return (
    <FeatureCardWrapper>
      <FeatureCardIcon>
        <img
          src={
            "https://media.istockphoto.com/photos/cute-little-african-school-girl-in-classroom-picture-id510398013?b=1&k=20&m=510398013&s=170667a&w=0&h=3Jcpx1PEpJvHdr25EiZhYsGk7G8avUmgM94HApG5644="
          }
          alt="feature"
        />
      </FeatureCardIcon>
      <TextWrap>
        <FeatureCardTitle>{title}</FeatureCardTitle>
        <FeatureCardDescription>
          <Heading>Dexplore</Heading>
        </FeatureCardDescription>
        <p>
          {" "}
          {desc} An AI driven data analytics platform for cardano networks an AI
          driven data analytics platform for cardano networks.
        </p>
        <BtnWrap>
          <Tag>casestudy</Tag>
          <Tag>projects</Tag>
          <Tag>Ux</Tag>
        </BtnWrap>
      </TextWrap>
    </FeatureCardWrapper>
  );
};

export { ProjectCard };
const Heading = styled.h3`
  font-family: Rubik;
  font-style: Semi-Bold;
  font-weight: 500;
  font-size: 24px;
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
const TextWrap = styled.div`
  height: calc(100% - 60% - 2rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: Rubik;
  justify-content: space-between;
  align-items: start;
  padding: 0 1rem 2rem 1rem;
  width: calc(100% - 2rem);
  & > p:last-of-type {
    font-family: Rubik;
    font-size: 1.6rem;
    font-weight: 400;
    height: 40%;
    text-align: start;
  }
`;
const Tag = styled.div`
  padding: 8px 11px;
  font-weight: 600;
  font-size: 12px;
  font-family: Rubik;
  color: ${colors.general_btn_bg};
  background-color: rgba(62, 207, 142, 0.19);
  border-radius: 10px;
`;
