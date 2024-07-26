import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Linker from "./component/Linker";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dir2" element={<Linker />} />
      </Routes>
    </>
  );
};

export default App;
