/*
Esercizio 9 – Somma dei numeri maggiori di 10

Tema: Array + filter + reduce
Obiettivo: Sommare tutti i numeri maggiori di 10 in un array.

Traccia:

    1. Crea un array di numeri, ad esempio [5, 12, 8, 20, 3].

    2. Filtra i numeri > 10.

    3. Somma i numeri filtrati con reduce.

    4. Stampa il risultato.
*/

// Alternativa 1
const numeri = [5, 12, 8, 20, 3];
const mag_10 = numeri.filter(numero => numero > 10);
const somma = mag_10.reduce((acc, numero) => acc + numero, 0);

console.log(somma);

// Alternativa 2
const numeri_2 = [5, 7, 9, 23, 4, 11, 14];
const somma_mag_10 = numeri_2.filter(numero => numero > 10).reduce((acc, numero) => acc + numero, 0);;

console.log(somma_mag_10);