import styled from "styled-components";
import { colors } from "../../colors";
import { patternBg } from "../../assets";
export const Container = styled.main`
  height: 100%;
  width: 100%;
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
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;

export const WidgetWrap = styled.div`
  border: 1px solid red;
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
  }
`;
export const Widget = styled.div`
  width: fit-content;
  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;
export const Main = styled.main`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;

export const Tab = styled.h2`
  font-size: 1.6rem;
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
  border: 1px solid red;
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
export const CurrentPostWrapper = styled.div`
  width: 50%;
  height: 68vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > p:first-of-type {
    padding-top: 15px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;

    border: 1px solid red;
    text-align: start;
  }
  & > h5 {
    font-size: 2.4rem;
    color: #fff;
  }
  & > h5:last-of-type {
    font-size: 1.6rem;

    font-weight: 400;
    line-height: 25px;
    text-align: start;
    font-family: "Kanit", sans-serif;
  }
`;
