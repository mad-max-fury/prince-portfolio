import styled from "styled-components";
import { colors } from "../../colors";

export const FeatureCardWrapper = styled.div`
  background-color: transparent;
  width: 310px;
  /* height: 55vh; */
  perspective: 1000px;
  height: 45.5rem;

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
  border-radius: 10px;
  & .flip-card-front,
  & .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  & .flip-card-front {
    background-color: #bbb;
    color: black;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  & .flip-card-back {
    background-color: #233945;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    & p {
      width: 90%;
      color: rgba(207, 207, 207, 1);
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }
    & > span {
      display: flex;
      gap: 0.75rem;
    }
  }
`;
