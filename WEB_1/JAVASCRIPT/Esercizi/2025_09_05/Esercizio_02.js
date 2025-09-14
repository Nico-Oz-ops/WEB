/*
Esercizio 2 – Operatori.

Traccia:

    1. Crea due numeri: a = 12 e b = 5.

    2. Calcola e stampa: somma, differenza, moltiplicazione, divisione e resto della divisione.

    3. Incrementa a di 1 usando ++ e decrementa b di 1 usando --.

Suggerimenti / indizi:

    * Per somma, differenza, moltiplicazione, divisione e resto puoi usare gli operatori +, -, *, / e %.
    * L’operatore ++ aggiunge 1 alla variabile, -- sottrae 1.
    * Stampa tutto in console con console.log().
*/

let a = 12;
let b = 5;

console.log("Somma:", a + b);
console.log("Differenza:", a - b);
console.log("Moltiplicazione:", a * b);
console.log("Divisione:", a / b);
console.log("Resto della divisione:", a % b);

a ++;
b --;

console.log("Incremento della variabile 'a':", a, "decremento della variabile 'b':", b);
