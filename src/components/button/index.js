import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const Button = ({ text }) => {
  return <ButtonWrapper> {text}</ButtonWrapper>;
};

export { Button };

const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 15px 35px;
  background-color: ${colors.general_btn_bg};
  color: ${colors.white};
  outline: 0;
  border: 0;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: unset;
    color: ${colors.general_btn_bg};
    border: 2px solid ${colors.general_btn_bg};
  }
  &:active {
    transition: all 0.3s ease-in-out;
    background-color: unset;
    color: ${colors.general_btn_bg};
    border: 2px solid ${colors.general_btn_bg};
  }
`;
