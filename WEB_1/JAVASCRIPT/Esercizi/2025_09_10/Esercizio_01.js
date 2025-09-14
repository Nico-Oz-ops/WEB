/*
Esercizio 1 – Promise base

Obiettivo: Creare una Promise semplice che si risolve o rifiuta dopo un timeout.

Traccia:

1. Crea una funzione attendi(ms) che restituisce una Promise che si risolve dopo ms millisecondi con un messaggio:
"Attesa di X ms completata"

2. Gestisci la Promise con .then() e .catch() per stampare il risultato o l’errore.
*/

// usando resolve - .then
function attendi(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Attesa di ${ms} ms completata`);
    }, ms);
  });
}

attendi(1000).then((valore) => console.log(valore));

// se volessi aggiungere resolve/reject e .then/.catch
function attendi_2(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 2000) {
      reject("Tempo di attesa troppo lungo!");
    } else {
      setTimeout(() => resolve(`Attesa di ${ms}ms completata!`), ms);
    }
  });
}

attendi_2(2000)
  .then((valore) => console.log("Successo:", valore))
  .catch((err) => console.error("Errore:", err));
