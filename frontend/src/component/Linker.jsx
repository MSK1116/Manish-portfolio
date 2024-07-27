import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Linker = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Failed to redirect...");
    }, 3000);
    const timer2 = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <>
      {!message ? <h2>Redirecting...</h2> : <h1 className="text-red-600">Failed.. Acess to this link has been blocked by devloper.</h1>}

      <br></br>
      {!message ? "" : <h2>Returning to home in 10s</h2>}
    </>
  );
};

export default Linker;
