import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
const Text = ({ tex, size, textReset }) => {
  return <TextHeading size={size}>{textReset ? textReset : tex}</TextHeading>;
};

export { Text };

const TextHeading = styled.h1`
  position: relative;
  width: fit-content;
  height: fit-content;
  font-size: ${(props) => (props.size ? props.size : "5.1rem")};
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-family: "Rubik", sans-serif;

  color: ${colors.white};
  &:after {
    content: "";
    height: 12px;
    position: absolute;
    bottom: 18%;
    margin: 0 0.5rem;
    width: 12px;
    border-radius: 50%;
    background-color: ${colors.general_btn_bg};
    @media (max-width: 768px) {
      height: 10px;
      width: 10px;
      border-radius: 5px;
      margin: 0 0.3rem;
      font-size: 1rem;
    }
  }
`;
