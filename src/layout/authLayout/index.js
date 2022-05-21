import { Navbar } from "../../components";

const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export { AuthLayout };
