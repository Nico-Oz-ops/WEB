/*
Esercizio 1 – Componente base con props

Obiettivo: Creare un componente riutilizzabile che mostra un 
           messaggio passato come prop.
*/

import React from "react";

function Messaggio({ testo }) {
  return <p>{testo}</p>;
}

export default Messaggio;
