/*
Esercizio 5 – Trova i numeri pari in un array

Tema: Array + cicli + operatori

Obiettivo: Filtrare elementi secondo una condizione e stamparli.

Traccia:

    1. Crea un array di numeri: [5, 8, 12, 7, 3, 10].

    2. Usa un ciclo for per controllare ogni numero.

    3. Stampa solo i numeri pari (divisibili per 2).

Suggerimento:

    * Usa l’operatore modulo % per verificare se un numero è divisibile per 2.
    * Dentro il ciclo for, un if (numero % 2 === 0) ti permette di filtrare i numeri pari.
*/

let numeri = [5, 8, 12, 7, 3, 10];

numeri.forEach(numero => {
    if (numero % 2 == 0) {
        console.log(`Numeri pari: ${numero}`)
    }
});