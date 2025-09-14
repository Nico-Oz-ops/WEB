/*
Esercizio 3 – Controllo nome studente

1. Funzione controllaStudente(nome) che ritorna una Promise.

2. Risolve se lo studente è presente nell’array studenti, altrimenti rigetta.

3. Consuma la Promise con .then() e .catch().
*/

const studenti = ["Anna", "Paolo", "Miriam", "Pietro", "Carlo", "Lucia"];

function controllaStudente(nome) {
  return new Promise((resolve, reject) => {
    if (studenti.includes(nome)) {
      resolve(`Lo studente '${nome}' è presente`);
    } else {
      reject(`Lo studente '${nome}' non è presente`);
    }
  });
}

controllaStudente("Miriam")
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

controllaStudente("Nico")
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
