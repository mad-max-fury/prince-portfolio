import styled from "styled-components";
import { colors } from "../../colors";

export const FeatureCardWrapper = styled.div`
  width: calc(34rem - 0rem);
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.secondary_color};
  color: #fff;
  height: 52.2rem;
  border-radius: 15px;
`;
export const FeatureCardIcon = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 15px 15px 0 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
export const FeatureCardTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.8px;
`;
export const FeatureCardDescription = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: #f5f5f7;
`;
