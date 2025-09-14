/*
Esercizio 2 – Array + callback inline

Traccia:
Dato l’array di numeri [2, 5, 8, 10], usa map con una arrow function inline per:

    1. Raddoppiare i numeri.
    2. Trasformarli in stringhe del tipo "Numero: X".

Esempio d’uso:
// [4, 10, 16, 20]
// ["Numero: 2", "Numero: 5", "Numero: 8", "Numero: 10"]
*/

const numeri = [2, 5, 8, 10];

const num_radoppiati = numeri.map(numero => numero * 2);
console.log(num_radoppiati);

const num_to_string = numeri.map(numero => `Numero: ${numero}`);
console.log(num_to_string);