import { Footer, Navbar } from "../../components";
import styled from "styled-components";
import { patternBg } from "../../assets";
import { colors } from "../../colors";
const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <Navbar />
      <Container>
        <InnerChildren>{children}</InnerChildren>
        <Footer />
      </Container>
    </>
  );
};

export { AuthLayout };

const Container = styled.main`
  min-height: calc(100vh - 80px - 1rem);
  display: flex;
  justify-content: space-between;
  padding: 0rem calc((100vw - 1300px) / 2);
  background-color: ${colors.main_color};
  background-image: url(${patternBg});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    object-fit: contain;
    background-size: cover;
    height: fit-content;
    padding: 0.5rem calc((100vw - 90%) / 2);
    min-height: calc(100vh - 90px);
    padding-bottom: 1.6rem;
  }
`;
const InnerChildren = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
`;
