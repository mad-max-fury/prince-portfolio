import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
const Text = ({text}) => {
  return <TextHeading>{text}</TextHeading>;
};

export { Text };

const TextHeading = styled.h1`
  position: relative;
  width: fit-content;
  height: fit-content;
  color: ${colors.white};
  &:after {
    content: "";
    height: 8px;
    position: absolute;
    bottom: 18%;
    margin: 0 0.5rem;
    width: 8px;
    border-radius: 4px;
    background-color: ${colors.general_btn_bg};
    @media (max-width: 768px) {
      height: 6px;
      width: 6px;
      border-radius: 3px;
      margin: 0 0.3rem;
    }
  }
`;
