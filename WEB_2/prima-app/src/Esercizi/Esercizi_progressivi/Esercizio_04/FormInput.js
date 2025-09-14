/*
Esercizio 4 – Form interattivo

Obiettivo: Creare un campo di testo dove l’utente scrive qualcosa e 
visualizza in tempo reale ciò che scrive sotto l’input.
*/

import React, { useState } from "react";

function FormInput() {
  const [testo, setTesto] = useState(""); // stato iniziale vuoto

  const handleChange = (event) => { // funzione che prende l’evento generato dall’input e aggiorna lo stato con event.target.value.
    console.log(event.target.value) // mostra ciò che l'utente scrive
    
    setTesto(event.target.value); // event.target.value è ciò che l'utente sta scrivendo nell'input
  };

  return (
    <div>
      <input // elemento dove l'utente può scrivere o selezionare qualcosa
        type="text" // specifica che l'input è di tipo testo (lettere, numeri, simboli)
        placeholder="Scrivi qualcosa..." // mostra un testo grigio chiaro dentro l'input prima che l'utente scriva. Tipo testo guida
        value={testo} // l'input è controllato da React, cioè il valore visibile è sempre quello nello stato
        onChange={handleChange} // ogni volta che l'utente digita qualcosa, chiami hanldeChange per aggiornare lo stato
      />
      <p>Hai scritto: {testo}</p>
    </div>
  );
}

export default FormInput;
