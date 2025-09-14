/*
Esercizio 7 – Trova il massimo e il minimo in un array

Tema: Array + cicli + logica

Obiettivo: Determinare il numero più grande e quello più piccolo in un array di numeri.

Traccia:

    1. Crea un array di numeri, ad esempio: [12, 5, 8, 21, 7, 3].

    2. Usa un ciclo for o forEach per scorrere l’array.

    3. Tieni traccia del massimo e del minimo usando due variabili separate.

    4. Alla fine, stampa sia il massimo che il minimo.

Suggerimento:

    * Inizializza let massimo = numeri[0] e let minimo = numeri[0] prima del ciclo.
    * All’interno del ciclo, confronta ogni numero con massimo/minimo e aggiorna se necessario.
*/

let numeri = [12, 5, 8, 21, 7, 3];
let massimo = numeri[0]
let minimo = numeri[0]

numeri.forEach( numero => {
    if (numero > massimo) {
        massimo = numero
    } if (numero < minimo) {
        minimo = numero
    }
});
console.log("Numero massimo:", massimo);
console.log("Numero minimo:", minimo);



