/*
Esercizio 11 – Controllo età studenti

Tema: Array di oggetti + forEach + if
Obiettivo: Aggiungere una proprietà maggiorenne a ciascuno studente in base all’età.

Traccia:

    1. Crea un array di oggetti studenti, ad esempio:
        [
        { nome: "Ana", eta: 20 },
        { nome: "Luis", eta: 17 },
        { nome: "Maria", eta: 19 }
        ]

    2. Usa forEach per aggiungere la proprietà maggiorenne = true se eta >= 18, altrimenti false.

    3. Stampa l’array aggiornato.
*/

const studenti = [
  { nome: "Ana", eta: 20 },
  { nome: "Luis", eta: 17 },
  { nome: "Maria", eta: 19 },
];

studenti.forEach((studente) => {
  if (studente.eta >= 18) {
    studente.maggiorenne = true;
  } else {
    studente.maggiorenne = false;
  }
});
console.log(studenti);
