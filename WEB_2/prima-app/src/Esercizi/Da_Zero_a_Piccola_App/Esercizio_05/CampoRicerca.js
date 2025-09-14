/*
Esercizio 5: Gestire Input Utente (Controlled Components)
Obiettivo: Creare un campo di input il cui valore è controllato dallo stato di React.
*/
import React, { useState } from "react";

function CampoRicerca() {
  const [testoRicerca, setTestoRicerca] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Scrivi qui..."
        value={testoRicerca}
        onChange={(e) => setTestoRicerca(e.target.value)}
      />

      <p>Stai cercando: {testoRicerca}</p>
    </div>
  );
}

export default CampoRicerca;
