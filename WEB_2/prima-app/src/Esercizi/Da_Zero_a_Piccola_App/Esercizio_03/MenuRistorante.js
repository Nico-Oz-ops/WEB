/*
Esercizio 3: Renderizzare Liste con .map()
Obiettivo: Visualizzare dinamicamente una lista di elementi partendo da un array
*/


import React from "react";
import piatti from "./piatti";

function MenuRistorante() {
  return (
    <div>
      <h3>Menù del Ristorante</h3>
      <ul>
        {piatti.map((piatto) => (
          <li key={piatto.id}>
            {piatto.nome} - €{piatto.prezzo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuRistorante;
