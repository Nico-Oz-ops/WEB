/*
Esercizio 9 – Trasforma tutti i numeri in stringhe

Tema: Array + map

Obiettivo: Creare un nuovo array dove ogni numero dell’array originale viene convertito in stringa.

Traccia:

    1. Crea un array di numeri, ad esempio: [1, 2, 3, 4, 5].

    2. Usa il metodo map per trasformare ogni numero in stringa.

    3. Stampa il nuovo array.

Suggerimento:

    * Puoi usare numero.toString() oppure interpolazione ${numero} all’interno del map.
*/

const numeri = [1, 2, 3, 4, 5];

const new_numeri = numeri.map(numero => numero.toString());
console.log(new_numeri);