import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Faq from "./pages/Faq";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}

export default App;
