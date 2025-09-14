/*
Esercizio 4 – Filtrare studenti promossi

Tema: Array di oggetti + filter
Obiettivo: Ottenere un array solo con gli studenti promossi.

Traccia:

    1. Hai un array di studenti, ciascuno con proprietà nome e media.

    2. Usa filter per creare un nuovo array contenente solo gli studenti con media ≥ 6.

    3. Stampa il nuovo array in console.
*/

const studenti = [
  { nome: "Lisa", media: 8 },
  { nome: "Luca", media: 5.9 },
  { nome: "Daniele", media: 4.5 },
  { nome: "Davide", media: 6.5 },
];

const new_studenti = studenti.filter(studente => studente.media >= 6);
console.log(new_studenti);