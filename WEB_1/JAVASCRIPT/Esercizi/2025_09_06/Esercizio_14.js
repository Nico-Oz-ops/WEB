/*
Esercizio 14 – Studenti JS con media alta

Tema: Array di oggetti + funzioni + filter + map
Obiettivo: Stampare i nomi degli studenti del corso "JS" con media >= 7.

Traccia:

    1. Crea un array di studenti con nome, voti e corso.

    2. Calcola la media dei voti con una funzione.

    3. Filtra gli studenti corso === "JS" e media >= 7.

    4. Crea un array con solo i nomi degli studenti filtrati e stampalo.
*/

const studenti = [
  { nome: "Carlos", voti: [5, 10, 9], corso: "Informatica" },
  { nome: "Ruben", voti: [7, 5, 8], corso: "JS" },
  { nome: "Carlotta", voti: [7, 10, 8], corso: "JS" },
  { nome: "Ottaviana", voti: [9, 9, 6], corso: "Matematica" },
];

function calcolaMedia(voti) {
    const somma = voti.reduce((acc, voto) => acc + voto, 0);
    return somma / voti.length 
};

const filter_studente = studenti.filter(studente => studente.corso === "JS" && calcolaMedia(studente.voti) >= 7);
const nomi = filter_studente.map(studente => studente.nome);

console.log("Studenti di JS con media >= 7:", nomi);