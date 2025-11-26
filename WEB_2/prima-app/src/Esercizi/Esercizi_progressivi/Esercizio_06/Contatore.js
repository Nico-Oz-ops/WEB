/* 
Contatore Incrementale/Decrementale
 
Obiettivo: Crea un contatore che possa essere incrementato e decrementato tramite due bottoni separati.
 
Requisiti:
 
Un titolo che dice "Contatore"
 
Due bottoni: uno per incrementare il contatore e uno per decrementarlo
 
* useState per mantenere il valore del contatore
* Mostra il valore corrente del contatore sotto i bottoni
 
Concetti: gestione numerica dello stato, handling di eventi
*/

import React, { useState } from "react";

const Contatore = () => {
  // Inizializzo lo stato "contatore" a 0. Questo stato terrà traccia del valore del contatore
  const [contatore, setContatore] = useState(0);

  // Funzione che serve a incrementare il valore del contatore di 1
  const incrementa = () => {
    setContatore(prev => prev + 1);
  };

  // Funzione che serve a decrementare il valore del contatore di 1
  const decrementa = () => {
    setContatore(prev => prev - 1);
  };

  return (
    <div>
      <h1>Contatore 🧮</h1>
      <button onClick={incrementa}>Incrementa ➕</button>
      <button onClick={decrementa}>Decrementa ➖</button>
      <p>Valore corrente: {contatore}</p>
    </div>
  );
};

export default Contatore;

/*
Usare la funzione aggiorna-stato basata sul valore precedente, per evitare 
potenziali problemi se React batcha gli aggiornamenti (buona abitudine generale):

* const incrementa = () => setContatore(prev => prev + 1);
* const decrementa = () => setContatore(prev => prev - 1);

è più robusto se in futuro il componente diventasse più complesso.
*/