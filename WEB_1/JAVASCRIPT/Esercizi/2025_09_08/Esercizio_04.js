/*
Esercizio 4 – Somma asincrona

1. Funzione sommaAsincrona(a, b) che ritorna una Promise risolta con a + b dopo 1 secondo.

2. Consuma la Promise con .then() per stampare il risultato.
*/

function sommaAsincrona(a, b) {
  return new Promise(resolve => {
    setTimeout(() => resolve(a + b), 1000);
  });
}

sommaAsincrona(5, 6)
  .then((somma) => console.log(somma))
  .catch((err) => console.log(err));
