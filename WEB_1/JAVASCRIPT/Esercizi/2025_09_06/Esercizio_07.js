/*
Esercizio 7 – Filtra studenti JS con media alta

Tema: Array di oggetti + funzioni + filter + map
Obiettivo:

1. Dato un array di studenti con proprietà nome, voti e corso, calcolare la media dei voti.
2. Stampare solo gli studenti del corso "JS" con media >= 7.
3. Creare un array con solo i nomi degli studenti selezionati.

Traccia dettagliata:

const studenti = [
  { nome: "Ana", voti: [7, 5, 8], corso: "JS" },
  { nome: "Luis", voti: [6, 4, 5], corso: "Python" },
  { nome: "Maria", voti: [9, 8, 10], corso: "JS" },
  { nome: "Carlos", voti: [7, 7, 6], corso: "JS" }
];

    1. Calcolare la media dei voti di ogni studente (funzione calcolaMedia).

    2. Filtrare solo gli studenti: corso === "JS" e media >= 7.

    3. Creare un array con solo i nomi degli studenti selezionati.

    4. Stampare il risultato.
*/

const studenti = [
  { nome: "Ana", voti: [7, 5, 8], corso: "JS" },
  { nome: "Luis", voti: [6, 4, 5], corso: "Python" },
  { nome: "Maria", voti: [9, 8, 10], corso: "JS" },
  { nome: "Carlos", voti: [7, 7, 6], corso: "JS" }
];

function calcolaMedia (voti) {
    const somma = voti.reduce((acc, voto) => acc + voto, 0);
    return somma / voti.length;
};

studenti.filter(studente => studente.corso === "JS" && calcolaMedia(studente.voti) >= 7).forEach(studente => {
    console.log(`Studenti promossi: ${studente.nome}`)
});