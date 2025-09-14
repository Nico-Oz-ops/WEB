/*
Esercizio 12 – Filtra studenti per corso

Tema: Array di oggetti + filter
Obiettivo: Stampare solo i nomi degli studenti iscritti a un certo corso.

Traccia:

    1. Crea un array di studenti con proprietà nome e corso.

    2. Filtra gli studenti che hanno corso === "JS".

    3. Stampa i loro nomi.
*/

const studenti = [
  { nome: "Juan", corso: "JS" },
  { nome: "Giovanni", corso: "React" },
  { nome: "Marco", corso: "AI - 2" },
  { nome: "Chiara", corso: "JS" },
  { nome: "Lisa", corso: "React" },
];

const corso = studenti.filter(studente => studente.corso === "JS").forEach(studente => {
    console.log(studente.nome)
});