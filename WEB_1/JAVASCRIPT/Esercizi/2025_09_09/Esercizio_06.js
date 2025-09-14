/*
Tema: Array + reduce
Obiettivo: Calcolare la somma di tutti i numeri in un array.

Traccia:

    1. Hai un array di numeri.

    2. Usa reduce per calcolare la somma totale.

    3. Stampa il risultato.

Input di esempio:
const numeri = [5, 10, 3, 8, 2];
*/

const numeri = [5, 10, 3, 8, 2];

const somma_totale = numeri.reduce((acc, numero) => acc + numero, 0);
console.log(somma_totale);