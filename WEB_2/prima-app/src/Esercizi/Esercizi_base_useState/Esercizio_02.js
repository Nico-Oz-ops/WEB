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
  // Inizializza lo stato "colore" come stringa vuota. 
  // Questo stato servirà a cambiare il colore del testo dinamicamente

  const cambiaColore = (nuovocolore) => {
    setColore(nuovocolore);
    // Aggiorna lo stato "colore" con il valore passato (nuovocolore)
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


/* 
Questo componente React mostra un titolo H1 e tre bottoni colorati. 
Cliccando su uno dei bottoni, lo stato "colore" viene aggiornato con il colore scelto, 
e di conseguenza il testo H1 cambia colore dinamicamente. 
In pratica è un semplice esempio di come usare useState per aggiornare lo stile inline in tempo reale.
*/
