import React from "react";
import styled from "styled-components";
import { compPImage } from "../../assets";
import { colors } from "../../colors";
import { Button } from "../button";

import {
  FeatureCardWrapper,
  FeatureCardIcon,
  FeatureCardTitle,
  FeatureCardDescription,
  Flipcardinner,
} from "./style";
const ProjectCard = ({ id, image, title, desc, classn, btnText }) => {
  return (
    <FeatureCardWrapper>
      <Flipcardinner>
        <div class="flip-card-front">
          <img src={image} alt="Avatar" />
        </div>
        <div class="flip-card-back">
          <Heading>{title}</Heading>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            aliquam malesuada dui rhoncus nullam adipiscing velit ultrices at.
            Viverra nulla integer ut volutpat ut. Non elit nunc purus
            suspendisse maecenas purus, quis semper.{" "}
          </p>
          <span>
            <Tag>casestudy</Tag>
            <Tag>projects</Tag>
            <Tag>UX</Tag>
          </span>
          <Button
            classn={classn}
            text={btnText ? btnText : "View Case Study"}
          />
        </div>
      </Flipcardinner>
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
    /* font-family: Rubik; */
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
  color: rgba(143, 143, 143, 1);
  background-color: rgba(11, 33, 45, 1);
  border-radius: 10px;
`;
