/*
Esercizio 4: Introduzione allo Stato con useState
Obiettivo: Rendere un componente interattivo usando l'hook useState
*/

import React, { useState } from "react";

function Termostato() {
  // stato iniziale: temp a 10°C
  const [temperatura, setTemperatura] = useState(10);

  return (
    <div>
      <h1>Temperatura: {temperatura}°C</h1>
      <button onClick={() => setTemperatura(temperatura + 1)}> + </button>
      <button onClick={() => setTemperatura(temperatura - 1)}> - </button>
    </div>
  );
}

export default Termostato;