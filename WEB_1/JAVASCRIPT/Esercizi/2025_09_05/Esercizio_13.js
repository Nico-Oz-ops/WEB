/*
Esercizio 13 – Trova il numero massimo

Tema: Array + ciclo + confronto
Obiettivo: Trovare il numero più grande in un array.

Traccia:

1. Crea un array di numeri, ad esempio [12, 7, 25, 3, 19].

2. Inizializza una variabile massimo con il primo elemento dell’array.

3. Scorri l’array con un ciclo e aggiorna massimo se trovi un numero più grande.

4. Stampa il numero massimo.
*/

// Alternativa 1 - uso di forEach
const numeri = [12, 7, 25, 3, 19];
let massimo = numeri[0];

numeri.forEach(numero => {
    if (numero > massimo) {
        massimo = numero
    }
});
console.log(`Il numero massimo dell'array è: ${massimo}`)

// Alternativa 2 - uso di spread + Math.max
const maximo = Math.max(...numeri)
console.log(`Numero massimo: ${maximo}`)