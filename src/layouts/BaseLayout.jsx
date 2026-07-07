import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import CodyBubble from "../components/CoddyBubble/CodyBubble.jsx";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
      <CodyBubble />
    </>
  );
};

export default BaseLayout;
