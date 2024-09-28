import React from "react";

import Studio_banner from "./Studio_banner";
import Studio_navbar from "./Studio_navbar";
const Studio = () => {
  document.title = "Studio || Manish Singh Mahato";
  return (
    <>
      <Studio_navbar />
      <Studio_banner />
    </>
  );
};

export default Studio;
