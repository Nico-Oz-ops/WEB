import React, { useState } from "react";

function PostFrom({ aggiungiPost }) {
  const [datiPost, setDatiPost] = useState({ titolo: "", contenuto: "" }); // stato locale form

  const handleChange = (e) => {
    // aggiorna campo modificato
    const { name, value } = e.target;
    setDatiPost({ ...datiPost, [name]: value });
  };

  const handleSubmit = (e) => {
    // gestisce submit del form
    e.preventDefault(); // evito refresh pagina
    if (datiPost.titolo.trim() === "" || datiPost.contenuto.trim() === "")
      // blocca i campi vuoti
      return;
    aggiungiPost(datiPost); // chiama funzione del genitore
    setDatiPost({ titolo: "", contenuto: "" }); // reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titolo"
        placeholder="Titolo"
        value={datiPost.titolo}
        onChange={handleChange}
      />
      <textarea
        name="contenuto"
        placeholder="Contenuto"
        value={datiPost.contenuto}
        onChange={handleChange}
      />
      <button type="submit">Aggiungi Post</button>
    </form>
  );
}

export default PostFrom;
