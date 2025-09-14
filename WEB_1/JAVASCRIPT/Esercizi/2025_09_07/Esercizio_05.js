/*
Esercizio 5 – Copia e modifica array

Traccia:

    1. Crea un array numeri = [1, 2, 3].

    2. Crea una copia dell’array usando lo spread operator e aggiungi i numeri 4 e 5.

    3. Stampa sia l’array originale sia la copia.
*/

const numeri = [1, 2, 3];

const numeri_agg = [...numeri, 4, 5];

console.log("Array originale:", numeri);
console.log("Array copia:", numeri_agg);