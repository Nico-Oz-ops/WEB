/*
Esercizio 13 – Media voti degli studenti

Tema: Array di oggetti + funzioni + map/reduce
Obiettivo: Calcolare la media dei voti di ciascuno studente e stampare chi ha media >= 6.

Traccia:

    1. Crea un array di studenti con proprietà nome e voti (array di numeri).

    2. Scrivi una funzione calcolaMedia(voti) che restituisca la media.

    3. Aggiungi la proprietà media a ogni studente.

    4. Stampa solo gli studenti con media >= 8.
*/

const studenti = [
  { nome: "Claire", voti: [10, 9, 8, 9, 10] },
  { nome: "Marco", voti: [8, 7, 6, 5, 8] },
  { nome: "Ramiro", voti: [10, 8, 8, 9, 7] },
  { nome: "Riccardo", voti: [10, 9, 8, 6, 5] },
  { nome: "Annalisa", voti: [6, 7, 8, 7, 9] },
];

// funzione che calcola la media
function calcoloMedia(voti) {
  const somma = voti.reduce((acc, voto) => acc + voto, 0);
  return somma / voti.length;
};

// Alternativa 1 - aggiungo la media a ogni studente usando forEach
studenti.forEach((studente) => {
  studente.media = calcoloMedia(studente.voti);
});
console.log(studenti);

// Alternartiva 2 - aggiungo la media a ogni studente usando map
const studentiConMedia = studenti.map((studente) => ({
  ...studente,
  media: calcoloMedia(studente.voti)
}));
console.log(studentiConMedia);

// stampa studenti che hanno media >= 8 - a partir de la alternativa 1
const studenti_8 = studenti.filter((studente) => studente.media >= 8);

console.log("Studenti che hanno una media uguale o superior a 8:");
studenti_8.forEach((studente) => console.log(studente.nome));


// stampa studenti media >= 8 secondo alternativa 2
const studenti_filter_nome = studentiConMedia.filter(studente => calcoloMedia(studente.voti) >= 8);
studenti_filter_nome.forEach(studente => console.log(studente.nome))