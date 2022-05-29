import styled from "styled-components";
import { colors } from "../../colors";

export const FeatureCardWrapper = styled.div`
  background-color: transparent;
  width: 350px;
  height: 55vh;
  perspective: 1000px;

  &:hover {
    & > div {
      transform: rotateY(180deg);
    }
  }
`;

export const Flipcardinner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  & .flip-card-front,
  & .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  & .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  & .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`;
