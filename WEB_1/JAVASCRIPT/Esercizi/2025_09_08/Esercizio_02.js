/*
Esercizio 2 – Controllo input

    * Funzione attesa(ms) che rigetta se ms < 0.

    * Consuma la Promise con .then() e .catch() per gestire successo e errore.
*/

function attesa(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject("Valore negativo!");
    } else {
      setTimeout(() => resolve("Tempo scaduto!!"), ms);
    }
  });
}

attesa(-1000)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

attesa(1000)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
