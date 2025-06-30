import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/home/HeroSection";
import QuemSomosSection from "../components/home/QuemSomosSection";
import AreaAtuacaoSection from "../components/home/AreaAtuacaoSection";
import PilaresSection from "../components/home/PilaresSection";
import CodySection from "../components/home/CodySection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <QuemSomosSection />
      <AreaAtuacaoSection />
      <PilaresSection />
      <CodySection />
    </>
  );
};

export default Home;
