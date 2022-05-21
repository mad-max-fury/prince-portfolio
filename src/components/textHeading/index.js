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
  font-size: ${({ size }) => (size ? `${size}rem` : "7rem")};
  margin: 0;
  padding: 0;
  color: ${colors.white};
  &:after {
    content: "";
    height: ${({ size }) => (size ? `${size * 0.4}rem` : "18px")};
    position: absolute;
    bottom: 18%;
    margin: 0 0.5rem;
    width: ${({ size }) => (size ? `${size * 0.4}rem` : "18px")};
    border-radius: 50%;
    background-color: ${colors.general_btn_bg};
    @media (max-width: 768px) {
      height: 6px;
      width: 6px;
      border-radius: 3px;
      margin: 0 0.3rem;
    }
  }
`;
