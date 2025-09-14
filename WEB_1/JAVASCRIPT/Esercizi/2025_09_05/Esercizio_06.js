/*
Esercizio 6 – Somma dei numeri positivi in un array

Tema: Array + cicli + operatori + condizione

Obiettivo: Sommare solo i numeri positivi di un array.

Traccia:

    1. Crea un array di numeri misti (positivi e negativi): [3, -2, 7, -5, 10, -1].

    2. Usa un ciclo for per scorrere l’array.

    3. Somma solo i numeri positivi.

    4. Alla fine, stampa la somma totale.

Suggerimento:

    * Usa if (numero > 0) per filtrare i numeri positivi.
    * Puoi tenere una variabile somma = 0 e aggiungere ogni numero positivo.
*/

let numeri = [3, -2, 7, -5, 10, -1];
let somma = 0

numeri.forEach(numero => {
    if (numero > 0) {
        somma += numero
    };
});
console.log("Somma totale dei numeri positivi:",somma)