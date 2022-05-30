import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const Button = ({ text, classn }) => {
  return <ButtonWrapper className={classn}> {text}</ButtonWrapper>;
};

export { Button };

const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 14px 32px;
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
  &.disabled {
    background-color: rgba(72, 94, 106, 1);
    color: rgba(27, 49, 61, 1);
    border: 2px solid rgba(72, 94, 106, 1);
    cursor: not-allowed;
  }
`;
