/*
Esercizio 8: Caricare Dati da un Server (Data Fetching)
Obiettivo: Usare useEffect per caricare dati da un'API esterna e gestire gli stati di
caricamento ed errore
*/
import React, { useEffect, useState } from "react";

function GalleriaFoto() {
  const [foto, setFoto] = useState([]);
  const [staCaricando, setstaCaricando] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const risposta = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        );
        if (!risposta.ok) {
          setErrore("Errore durante il caricamento delle foto");
        } else {
          const dati_risposta = await risposta.json();
          setFoto(dati_risposta);
        }
      } catch (err) {
        setErrore(err.message);
      } finally {
        setstaCaricando(false);
      }
    };

    fetchFoto();
  }, []);

  // gestione stato caricamento
  if (staCaricando) {
    return <p>Caricamento in corso...</p>;
  }

  // gestione errore
  if (errore) {
    return <p style={{ color: "red" }}>Errore: {errore}</p>;
  }

  // visualizzazione galleria
  return (
    <div>
      <h2>Galleria Foto</h2>
      <div>
        {foto.map((f) => (
          <div>
            <img src={f.thumbnailUrl} alt={f.title} />
            <p>{f.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleriaFoto;
