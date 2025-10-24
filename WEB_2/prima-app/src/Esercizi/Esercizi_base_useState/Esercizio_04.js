/*
4. Selettore Pizza

Obiettivo: Dropdown per scegliere la tua pizza preferita e mostrare la scelta

Requisiti:
● Select con 4-5 tipi di pizza (Margherita, Diavola, Capricciosa...)
● useState per la pizza selezionata
● Mostra: "Hai scelto: [nome pizza]"

Concetti: select handling, string stat
*/
import React, { useState } from "react";

const Esercizio_04 = () => {
  const [pizza, setPizza] = useState("");

  const handleSelectChange = (event) => {
    setPizza(event.target.value);
  };
  return (
    <div>
      <h2>🍕Seleziona la tua pizza🍕</h2>
      <select value={pizza} onChange={handleSelectChange}>
        <option value={""} disabled>Pizze</option>
        <option value="Margherita">Margherita 👸🏻</option>
        <option value="Diavola">Diavola 😈</option>
        <option value="Quattro Stagioni">Quattro Stagioni 🍂</option>
        <option value="Capricciosa">Capricciosa 😏</option>
        <option value="Hawaiana">Hawaiana 🫩</option>
      </select>
      <p>Hai scelto: {pizza}</p>
    </div>
  );
};

export default Esercizio_04;

