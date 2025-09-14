/*
Esercizio 2: Componenti Dinamici con le Props
Obiettivo: Imparare a passare dati a un componente per renderlo riutilizzabile.
*/
import React from "react";

function CardUtente(props) {
  return (
    <div>
      <h2> {props.nome}</h2>
      <p>{props.email}</p>
      <img src={props.imgUrl} alt="Avatar utente" />
    </div>
  );
}

export default CardUtente;