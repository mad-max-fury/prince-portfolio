import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

import {
  FeatureCardWrapper,
  FeatureCardIcon,
  FeatureCardTitle,
  FeatureCardDescription,
  Flipcardinner,
} from "./style";
const ProjectCard = ({ id, image, title, desc }) => {
  return (
    <FeatureCardWrapper>
      <Flipcardinner>
        <div class="flip-card-front">
          <img
            src=""
            alt="Avatar"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div class="flip-card-back">
          <h1>somet</h1>
          <p> Ehfbejfefe</p>
          <p>whhjfbefef</p>
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
  font-family: Rubik;
  color: ${colors.general_btn_bg};
  background-color: rgba(62, 207, 142, 0.19);
  border-radius: 10px;
`;
