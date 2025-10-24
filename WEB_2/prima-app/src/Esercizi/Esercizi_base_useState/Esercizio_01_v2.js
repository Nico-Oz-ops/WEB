import React, { useState } from "react";

const Esercizio_01_v2 = () => {
  const [mostra, setMostra] = useState(true);

  return (
    <div>
      <button onClick = {() => setMostra(!mostra)}>
        {mostra ? "Nascondi" : "Mostra"}
      </button>
      {mostra && <p>Mi vedi</p>}
    </div>
  );
};

export default Esercizio_01_v2;
