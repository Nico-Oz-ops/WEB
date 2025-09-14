/*
Esercizio 8 – Concatenare nomi in un’unica stringa

Tema: Array di oggetti + reduce
Obiettivo: Creare una stringa con tutti i nomi separati da una virgola.

Traccia:

    1. Hai un array di oggetti {nome}.

    2. Usa reduce per concatenare tutti i nomi in una sola stringa, separati da virgola.

    3. Stampa il risultato.

Input di esempio:
const studenti = [
  { nome: "Alice" },
  { nome: "Bruno" },
  { nome: "Carla" }
];
*/

const studenti = [
  { nome: "Alice" },
  { nome: "Bruno" },
  { nome: "Carla" }
];

const new_studenti = studenti.reduce((acc, studente, i) => i === 0 ? studente.nome : acc + ", " + studente.nome, "");
console.log(new_studenti);