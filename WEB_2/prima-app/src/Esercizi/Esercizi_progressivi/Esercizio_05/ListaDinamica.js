/*
Esercizio 5 – Lista dinamica dall’input

Obiettivo:
L’utente scrive un testo in un input e, cliccando un pulsante, 
aggiunge l’elemento a una lista che viene aggiornata e mostrata in tempo reale.
*/
import React, { useState } from "react";

function ListaDinamica() {
  const [testo, setTesto] = useState(""); // stato per l'input
  const [lista, setLista] = useState([]); // stato per la lista

  const handleChange = (event) => {
    setTesto(event.target.value); // aggiorna il testo dell'input
  };

  const handleAggiungi = () => {
    if (testo.trim() !== "") {
      // controllo che il testo non sia una stringa vuota, quindi controllo
      setLista([...lista, testo]); // aggiungo il nuovo elemento alla lista
      setTesto(""); // pulisce l'input
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Scrivi qualcosa..."
        value={testo}
        onChange={handleChange}
      />
      <button onClick={handleAggiungi}>Aggiungi</button>

      <ul>
        {lista.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListaDinamica;
