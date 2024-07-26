import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Linker = () => {
  const navigate = useNavigate();
  useEffect(() => (location.href = "https://drive.google.com/drive/folders/1B1rD9Oeyk4gvAnBOYgjfuUDVpHpV-QLt?usp=sharing"));
  return (
    <>
      <h1>Redirecting...</h1>
    </>
  );
};

export default Linker;
