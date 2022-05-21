import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
<<<<<<< HEAD
const Text = ({text}) => {
  return <TextHeading>{text}</TextHeading>;
=======
const Text = ({ tex }) => {
  return <TextHeading>{tex}</TextHeading>;
>>>>>>> 5244714930158601e2c90932592f860a0ff513b8
};

export { Text };

const TextHeading = styled.h1`
  position: relative;
  width: fit-content;
  height: fit-content;
<<<<<<< HEAD
=======
  font-size: 7rem;
  margin: 0;
  padding: 0;
>>>>>>> 5244714930158601e2c90932592f860a0ff513b8
  color: ${colors.white};
  &:after {
    content: "";
    height: 18px;
    position: absolute;
    bottom: 18%;
    margin: 0 0.5rem;
    width: 18px;
    border-radius: 9px;
    background-color: ${colors.general_btn_bg};
    @media (max-width: 768px) {
      height: 6px;
      width: 6px;
      border-radius: 3px;
      margin: 0 0.3rem;
    }
  }
`;
