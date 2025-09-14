// Utilizzo di "var"
var z = 50;

/* può essere dichiarata di nuovo*/
if (true) {
    var z = 100;
}

console.log(z) // il valore di z = 100

// come con "let" si può riassegnare un nuovo valore alla variabile
var a = 100
a = 15
console.log(a) // a = 15

// hoisting, ovvero quando la dichiarazione viene sollevata.
// Cioè, utilizzare una variabile prima della sua dichiarazione nel codice (avrà valore "undefined")
console.log(b) // undefined

var b = 150
console.log(b) // b = 150

/* Questo comportamento può portare a risultati inaspettati e potenzialmente a bug, 
ed è una delle ragioni per cui l'uso di `let` e `const`
è generalmente preferito, poiché non presentano questo comportamento di hoisting.*/