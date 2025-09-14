/*
Esercizio 2 – Async/Await semplice

Obiettivo: Trasformare la Promise precedente in una funzione async.

Traccia:

1. Crea una funzione attendi(ms) che restituisce una Promise che si risolve dopo ms millisecondi 
   con un messaggio: "Attesa di X ms completata"

2. Crea una funzione async function esempio() che:

    * aspetta 1 secondo

    * stampa il messaggio della Promise usando await

3. Gestisci eventuali errori con try/catch.
*/

function attendi(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 2000) {
      reject("Tempo di attesa lungo!");
    } else {
      setTimeout(() => resolve(`Attesa di ${ms}ms completata!`), ms);
    }
  });
}

async function esempio() {
  try {
    const risolve = await attendi(1000);
    console.log(risolve);
  } catch (err) {
    console.error(err);
  }
}
esempio();