/*
2. Cambio Colore Testo

Obiettivo: 3 bottoni (Rosso, Verde, Blu) che cambiano il colore di un testo

Requisiti:
● Un titolo "Ciao Mondo!"
● 3 bottoni colorati
● useState per memorizzare il colore scelto
● Il testo cambia colore quando clicchi un bottone

Concetti: string state, inline styles
*/

import React, { useState } from "react";

const Esercizio_02 = () => {
  const [colore, setColore] = useState("");

  const cambiaColore = (nuovocolore) => {
    setColore(nuovocolore);
  };
  return (
    <div>
      <h1 style={{ color: colore }}>JavaScreaaaaam😱!</h1>
      <button
        style={{ backgroundColor: "red", color: "white", marginRight: "5px" }}
        onClick={() => cambiaColore("red")}
      >
        Rosso
      </button>
      <button
        style={{ backgroundColor: "green", color: "white", marginRight: "5px" }}
        onClick={() => cambiaColore("green")}
      >
        Verde
      </button>
      <button
        style={{ backgroundColor: "blue", color: "white", marginRight: "5px" }}
        onClick={() => cambiaColore("blue")}
      >
        Blue
      </button>
    </div>
  );
};

export default Esercizio_02;
