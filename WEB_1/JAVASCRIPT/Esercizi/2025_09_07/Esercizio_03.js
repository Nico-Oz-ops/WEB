/*
Esercizio 3 – Primitivi

Traccia:

    1. Crea una variabile x con valore 10.
    2. Assegna y = x.
    3. Modifica y a 20.
    4. Stampa x e y.

Domanda: quale sarà il valore di x e perché?
*/

let x = 10;
let y = x;
y = 20;

console.log("x:", x);
console.log("y:", y);

// x non cambia perché i numeri sono tipi primitivi e vengono copiati per valore, non per riferimento