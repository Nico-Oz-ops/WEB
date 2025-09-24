import React, { useState } from "react";

function Termostato2() {
  const [termo, setTermo] = useState(20);
  const aumenta = () =>
    setTimeout(() => {
      setTermo((current) => current + 1);
    }, 2000);

  return (
    <>
      <div>La temperatura è: {termo}°C</div>
      <button onClick={() => setTermo(termo - 1)} className="btn btn-danger">
        -
      </button>
      <button onClick={aumenta} className="btn btn-danger">
        +
      </button>
    </>
  );
}

export default Termostato2;
