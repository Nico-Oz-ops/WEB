/*
Esercizio 3 – Lunghezza delle stringhe

Tema: Array + map
Obiettivo: Dato un array di parole, creare un nuovo array con la lunghezza di ciascuna parola.

Traccia:

    1. Crea un array di parole, ad esempio ["gatto", "elefante", "cane"].

    2. Usa map per ottenere un nuovo array con la lunghezza di ogni parola.

    3. Stampa il risultato.

Suggerimento: la proprietà .length di una stringa ti darà il numero di caratteri.
*/

// Alternativa 1
const parole = ["gatto", "elefante", "cane"];
const len_parola = parole.map(parola => parola.length);
console.log(len_parola)

// Alternativa 2 - modificare leggermente la stampa
console.log("Lunghezza delle parole:", len_parola.join(", "));





