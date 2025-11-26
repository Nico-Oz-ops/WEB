/*
1. Mostra/Nascondi Testo

Obiettivo: Un bottone che mostra/nasconde un paragrafo di testo

Requisiti:
● Un bottone con scritto "Mostra" o "Nascondi"
● useState con valore booleano (true/false)
● Quando clicchi, il testo appare o scompare

Concetti: boolean state, conditional rendering
*/

import React, { useState } from "react";

const Esercizio_01 = () => {
  const [isVisible, setIsVisible] = useState(false); // Inizializza lo stato "isVisible" a false (testo nascosto)

  const toggleVisibility = () => { 
    setIsVisible(!isVisible); // Inverte lo stato di "isVisible": se era true diventa false e viceversa
  };
  return (
    <div>
      <button onClick={toggleVisibility}> 
        {isVisible ? "Nascondi" : "Mostra"}
      </button>
      {isVisible && <p>Questo è il testo da mostrare o nascondere</p>}
    </div>
  );
};

export default Esercizio_01;

/* 
Questo componente React crea un bottone che permette di mostrare o nascondere un testo.
Quando clicchi sul bottone, il valore dello stato "isVisible" cambia da true a false o viceversa.
Il testo viene mostrato solo quando "isVisible" è true, creando un effetto di toggle.
*/


