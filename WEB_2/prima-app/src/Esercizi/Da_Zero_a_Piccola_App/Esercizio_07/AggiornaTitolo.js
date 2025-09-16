/*
Esercizio 7: Effetti Collaterali con useEffect
Obiettivo: Usare useEffect per eseguire un'azione (un "effetto collaterale") in risposta a
un cambiamento di stato.
*/

import React, { useEffect, useState } from "react";

function AggiornaTitolo() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (nome.trim() === "") {
      document.title = "Benvenuto!";
    } else {
      document.title = `Ciao, ${nome}!`;
    }
  }, [nome]);

  return (
    <div>
      <input
        type="text"
        placeholder="Scrivi qui..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default AggiornaTitolo;
