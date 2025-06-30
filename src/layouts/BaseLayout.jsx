import Header from "../components/Header";
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
