import styled from "styled-components";
import { colors } from "../../colors";
import { motion } from "framer-motion";
export const Container = styled(motion.main)`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 700px) {
    height: fit-content;
    padding: 3rem 0;
  }
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  border: 1px;
`;
export const Paragraph = styled(motion.p)`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;

export const WidgetWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  & > span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    & > span {
      & > h1 {
        font-size: 2.5rem;
        font-weight: 400;
      }
      @media screen and (max-width: 500px) {
        margin: 0 auto;
        & > h1 {
          font-weight: 400;

          font-size: 2.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 1318px) {
    max-width: 90%;
  }
  @media screen and (max-width: 618px) {
    flex-direction: column;
    & > span {
      flex-direction: column;
    }
  } ;
`;
export const Widget = styled.div`
  width: fit-content;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1318px) {
    margin: 2rem 0;
  }
`;
export const Main = styled.main`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1318px) and (min-width: 800px) {
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24.69rem, 1fr));
    gap: 1rem;
    row-gap: 2rem;
    place-items: center;
  }
  @media screen and (max-width: 800px) {
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24.69rem, 1fr));
    gap: 1rem;
    row-gap: 1rem;
    place-items: center;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    place-items: center;
  }
`;

export const Tab = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  padding: 15px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;

  &.active {
    transition: all 0.3s ease-in-out;
    color: ${colors.nav_link};
    border-bottom: 2px solid ${colors.nav_link};
  }
`;
export const PaginationWrap = styled.div`
  height: 6rem;
  width: 290px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 20px;
    height: fit-content;
    color: ${colors.grey_text};
    border: 2px solid ${colors.grey};
    text-align: center;
    &.active {
      color: ${colors.nav_link};
      border: 2px solid ${colors.nav_link};
    }
  }
`;
