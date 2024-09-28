import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Linker from "./component/Linker";
import Studio from "./studio/Studio";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dir2" element={<Linker />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
