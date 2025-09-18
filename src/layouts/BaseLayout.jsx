import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
