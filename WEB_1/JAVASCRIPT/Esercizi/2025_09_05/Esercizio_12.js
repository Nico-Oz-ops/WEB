/*
Esercizio 12 – Somma dei numeri dispari

Tema: Array + forEach + if
Obiettivo: Calcolare la somma di tutti i numeri dispari in un array.

Traccia:

1. Crea un array di numeri, ad esempio [1, 2, 3, 4, 5].

2. Usa forEach per scorrere l’array.

3. Se il numero è dispari (numero % 2 !== 0), aggiungilo a una variabile somma.

4. Stampa il risultato.
*/

// Alternativa 1 - uso di forEach
const numeri = [1, 2, 3, 4, 5];
let somma = 0;

numeri.forEach(numero => {
    if (numero % 2 === 1) {
        somma += numero;
    }
});
console.log(`Somma dei numeri dispari: ${somma}`);

// Alternativa 2 - uso di filter e reduce
const list_numeri = [1, 8, 6, 5, 7, 9, 3, 40];

const numeri_dispari = list_numeri.filter(numero => numero % 2 !== 0);
const somma_dispari = numeri_dispari.reduce((acc, numero) => acc + numero, 0);
console.log(`La somma dei numeri dispari è uguale a: ${somma_dispari}`);

// Alternativa 3 - filter e reduce in una sola riga
const lista_numeri = [1, 8, 6, 5, 7, 9];
const sum_dispari = lista_numeri.filter(numero => numero % 2 !== 0).reduce((acc, numero) => acc + numero, 0);
console.log(`La somma dei numeri dispari è uguale a: ${sum_dispari}`);
