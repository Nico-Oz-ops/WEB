/*
Esercizio 10 – Lunghezza delle parole

Tema: Array di stringhe + map
Obiettivo: Creare un array con la lunghezza di ciascuna parola.

Traccia:

    1. Crea un array di parole, ad esempio ["gatto", "elefante", "cane"].

    2. Usa map per ottenere la lunghezza di ogni parola.

    3. Stampa il nuovo array.
*/

const parole = ["leone", "lupo", "lucertola", "foca", "ballena"];
const len_parola = parole.map(parola => parola.length);
console.log(len_parola);

