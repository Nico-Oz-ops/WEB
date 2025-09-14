/*
Esercizio 1 – Funzione con callback

Traccia:
Scrivi una funzione operazione che prende tre parametri: due numeri e una funzione callback. 
La funzione deve restituire il risultato dell’operazione applicata ai due numeri.
Prova con callback diverse: somma, moltiplicazione, sottrazione.

Esempio d’uso:
operazione(5, 3, somma);        // 8
operazione(5, 3, moltiplicazione); // 15
operazione(5, 3, (a, b) => a - b); // 2
*/

// Somma
function operazione(a, b, callback){
    console.log(callback(a, b));
};

function somma(a, b){
    return a + b 
};

operazione(5, 3, somma);

// Moltiplicazione
function operazione(a, b, callback){
    console.log(callback(a, b));
};

function moltiplicazione(a, b){
    return a * b;
};

operazione(5, 3, moltiplicazione);

// Sottrazione
function operazione(a, b, callback){
    console.log(callback(a, b));
};

const sottrazione = (a, b) => a - b; // implicit return

const sottrazione_2 = (a, b) => { // explicit return
    return a - b;
};

operazione(5, 3, sottrazione);
operazione(5, 3, sottrazione_2);