/*
Esercizio 6: Rendering Condizionale
Obiettivo: Mostrare o nascondere elementi della UI in base a una condizione.
*/
import React, { useState } from "react";

function MessaggioSegreto() {
  const [mostra, setMostra] = useState(false);

  return (
    <div>
      <button onClick={() => setMostra(!mostra)}>
        {mostra ? "Nascondi messagio" : "Mostra messaggio"}
      </button>

      {mostra && <p>Ups, l'ho dimenticato</p>}
    </div>
  );
}

export default MessaggioSegreto;
