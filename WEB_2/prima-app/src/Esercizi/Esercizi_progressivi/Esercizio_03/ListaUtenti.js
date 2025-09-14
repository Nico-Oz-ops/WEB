/*
Esercizio 3 – Lista e rendering condizionale

Obiettivo: Mostrare una lista di utenti, indicando se sono maggiorenni o minorenni.
*/

import React from "react";

function ListaUtenti({ utenti }) {
  return (
    <ul>
      {utenti.map((utente, index) => (
        <li key={index}>
          {utente.nome} - {utente.eta >= 18 ? "Magiorenne" : "Minorenne"}
        </li>
      ))}
    </ul>
  );
}

export default ListaUtenti;

