/*
Esercizio 9: Gestire Form Complessi con un Singolo Stato
Obiettivo: Gestire un form con più campi usando un singolo oggetto per lo stato.
*/

import React, { useState } from "react";

function ModuloContatti() {
  const [datiForm, setDatiForm] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });

  // funzione unica per tutti i campi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatiForm({
      ...datiForm, // copio tutti i campi esistenti
      [name]: value, // aggiorno solo il campo modificato
    });
  };

  // gestione submit
  const handleSubmit = (e) => {
    e.preventDefault(); // evito comportamento predefinito del form, cioè refresh della pagina
    console.log(datiForm); // stampo l'oggetto completo
  };

  return (
    <div>
      <h2>Modulo Contatti</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={datiForm.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={datiForm.email}
          onChange={handleChange}
        />
        <textarea
          name="messaggio"
          placeholder="Messaggio"
          value={datiForm.messaggio}
          onChange={handleChange}
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default ModuloContatti;
