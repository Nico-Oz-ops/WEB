/*
Esercizio 7 – Massimo valore in un array

Tema: Array + reduce
Obiettivo: Trovare il numero più grande in un array.

Traccia:

    1. Hai un array di numeri.

    2. Usa reduce per ottenere il massimo valore.

    3. Stampa il risultato.

Input di esempio:
const valori = [12, 45, 7, 22, 34];
*/
const valori = [12, 45, 7, 22, 34];

const valore_max = valori.reduce((acc, valore) => (valore > acc ? valore : acc), valori[0]);
console.log(valore_max);
