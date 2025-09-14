/*
Esercizio 1 – Base (solo .then() e .catch())

Traccia:

    1. Crea una funzione attesa(ms) che ritorna una Promise che si risolve dopo ms millisecondi.

    2. Consuma la Promise usando .then() per stampare "Tempo scaduto!" e .catch() per eventuali errori.
*/

function attesa(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject("Il tempo non può essere negativo!");
    } else {
      setTimeout(() => resolve("Tempo scaduto!"), ms);
    }
  });
}
// stiuazione di ms positivo
attesa(2000)
  .then((msg_risolve) => console.log(msg_risolve))
  .catch((msg_fallisce) => console.error(msg_fallisce));

// situazione di ms negativo
attesa(-2000)
  .then((msg_risolve) => console.log(msg_risolve))
  .catch((msg_fallisce) => console.error(msg_fallisce));
