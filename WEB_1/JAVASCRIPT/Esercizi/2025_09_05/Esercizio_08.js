/*
Esercizio 8 – Filtra parole lunghe

Tema: Array + cicli + condizioni

Obiettivo: Stampare solo le parole che hanno più di un certo numero di lettere.

Traccia:

    1. Crea un array di parole, ad esempio: ["gatto", "cane", "elefante", "topo", "mucca"].

    2. Imposta una lunghezza minima, ad esempio minLunghezza = 5.

    3. Usa un ciclo forEach per scorrere l’array.

    4. Stampa solo le parole con lunghezza maggiore o uguale a minLunghezza.

Suggerimento:

    * Puoi usare parola.length per ottenere la lunghezza di ogni parola.
    * sa un if per filtrare le parole.
*/

let parole = ["gatto", "cane", "elefante", "topo", "mucca"];
let minLunghezza = 5

parole.forEach(parola => {
    if (parola.length >= minLunghezza) {
        console.log(parola)
    };
});