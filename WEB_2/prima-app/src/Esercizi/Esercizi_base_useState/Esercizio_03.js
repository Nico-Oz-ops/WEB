/*
3. Echo Input

Obiettivo: Quello che scrivi nell'input appare sotto in tempo reale

Requisiti:
● Un campo input
● useState per il testo
● Mostra sotto l'input: "Hai scritto: [testo]"
● Si aggiorna mentre scrivi

Concetti: input handling, onChange event
*/
import React, { useState } from "react";

const Esercizio_03 = () => {
  const [testo, setTesto] = useState("");
  
  const handleInputChange = (event) => {
    setTesto(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Scrivi quello che vuoi ✍🏼"
        value={testo}
        onChange={handleInputChange}
      />
      <p>Hai scritto: {testo}</p>
    </div>
  );
};

export default Esercizio_03;
