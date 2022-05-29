import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
export const Inner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 680px;
  margin: auto;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    align-items: center;
  }
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 32px;
`;
