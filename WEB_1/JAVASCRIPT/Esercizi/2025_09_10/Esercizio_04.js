/*
Esercizio 21 – Array di Promises

Obiettivo: Usare Promise.all per aspettare più Promise contemporaneamente.

Traccia:

1. Crea tre Promise usando attendi(ms) con tempi diversi: 500, 1000, 1500 ms

2. Usa Promise.all per aspettare che tutte si risolvano

3. Stampa tutti i messaggi insieme
*/

function attendi(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 1500) {
      reject("Tempo di attesa superiore a 1500ms");
    } else if (ms > 1000) {
      reject("Tempo di attesa superiore a 1000ms");
    } else if (ms > 500) {
      reject("Tempo di attesa superiore a 500ms");
    } else {
      setTimeout(() => resolve(`Attesa di ${ms}ms completata!`), ms);
    }
  });
}

const array_promises = [attendi(500), attendi(100), attendi(450)];

Promise.all(array_promises)
  .then((valore) => console.log("Successo:", valore))
  .catch((error) => console.error("Errore:", error));


