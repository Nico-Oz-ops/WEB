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
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => { 
    setIsVisible(!isVisible); 
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


