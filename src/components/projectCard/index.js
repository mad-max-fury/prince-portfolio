import React from "react";
import styled from "styled-components";
import { Button } from "../button";

import { FeatureCardWrapper, Flipcardinner } from "./style";
const ProjectCard = ({
  id,
  image,
  title,
  desc,
  classn,
  btnText,
  Paragraph,
}) => {
  return (
    <FeatureCardWrapper>
      <Flipcardinner>
        <div class="flip-card-front">
          <img src={image} alt="Avatar" />
        </div>
        <div class="flip-card-back">
          <Heading>{title}</Heading>
          <p>{Paragraph}</p>
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

const Tag = styled.div`
  padding: 8px 11px;
  font-weight: 600;
  font-size: 12px;
  color: rgba(143, 143, 143, 1);
  background-color: rgba(11, 33, 45, 1);
  border-radius: 10px;
`;
