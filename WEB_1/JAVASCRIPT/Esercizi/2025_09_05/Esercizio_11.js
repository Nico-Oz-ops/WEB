/*
Esercizio 11 – Controllo numeri negativi e positivi

Tema: Array + for + if
Obiettivo: Stampare se ogni numero in un array è positivo, negativo o zero.
Traccia:

1. Crea un array di numeri, ad esempio [3, -2, 0, 5, -7].

2. Usa un ciclo for per scorrere ogni numero.

3. Controlla con if/else se è positivo, negativo o zero e stampa un messaggio.
*/

const numeri = [3, -2, 0, 5, -7];

// Alternativa 1
for (let i = 0; i < numeri.length; i++){
    if (numeri[i] > 0) {
        console.log("Il numero " + numeri[i] + " è positivo")
    } else if (numeri[i] < 0) {
        console.log("Il numero " + numeri[i] + " è negativo")
    } else {
        console.log("Zero")
    }
};

// Alternativa 2
for (let numero of numeri) {
    if (numero > 0) {
        console.log(`${numero} è positivo.`)
    } else if (numero < 0) {
        console.log(`${numero} è negativo.`)
    } else {
        console.log("Zero")
    }
};

// Alternativa 3
numeri.forEach(numero => {
    if (numero > 0) {
        console.log(`${numero}: positivo`)
    } else if (numero < 0) {
        console.log(`${numero}: negativo`)
    } else {
        console.log(`${numero}: zero`)
    }
});