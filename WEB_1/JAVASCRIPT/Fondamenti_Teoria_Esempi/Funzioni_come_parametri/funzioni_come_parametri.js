/*Una delle prime caratteristiche di JavaScript è la capacità di passare funzioni come argomenti ad altre funzioni. 
Ad esempio, la funzione `setTimeout`, fornita dal browser, per impostare un timer. Questa funzione 
accetta due parametri: il primo è una funzione, che può essere definita sia con la parola chiave `function` 
sia come funzione freccia.
È importante capire che stiamo creando una nuova funzione anonima, poiché non ha un nome specifico. Potremmo
anche definirla separatamente con un nome, come `handleTimeout`, e poi passarla a `setTimeout`.

Quando passiamo una funzione come argomento, dobbiamo farlo utilizzando solo il suo nome, senza parentesi.
Questo perché vogliamo passare la funzione stessa, non il suo valore di ritorno.

`setTimeout` accetta anche un secondo parametro, che è un numero rappresentante il tempo di attesa in
millisecondi prima dell'esecuzione della funzione.

Si possono creare anche funzioni personalizzate che accettano altre funzioni come argomenti. Ad
esempio, una funzione `greeter` potrebbe accettare una funzione `greet` come parametro e poi eseguirla.*/

// Esempio 1 - Utilizzo di "setTimeOut" con una funzione anonima
setTimeout(function(){
    console.log("È passato 1 secondo!")
}, 3000);

// Esempio 2 - Utilizzo di "setTimeOut" con una funzione predefinita
function handleTimeout() {
    console.log("Sono passati 2 secondi!");
}

setTimeout(handleTimeout, 2000);

// Esempio 3 - Utilizzo di "setTimeOut" con una funzione freccia
setTimeout(() => {
    console.log("Sono passati 3 secondi!")
}, 3000);

// Esempio 4 - Creazione di una funzione che accetta un'altra funzione come argomento
function greeter(greetFn) {
  console.log("Inizio saluto...");
  greetFn(); // <-- qui viene eseguita la funzione passata come argomento
  console.log("Fine saluto.");
}
// Chiamata della funzione "greeter" passando come argomento una funzione anonima
greeter(() => {
  console.log("Ciao a tutti");
});


/*
 -  greetFn serve per dire “quando arrivi qui, esegui la funzione 
    che ti passo dall’esterno”.
 -  Se non gliene passi nessuna, lui non sa cosa fare e ti dà errore, 
    a meno che tu non gestisca il caso.

La funzione freccia "() => { console.log("Ciao a tutti"); }"
è creata al volo e passata come argomento alla funzione greeter.

Dentro greeter, il parametro "greetFn" diventa proprio quella funzione.
Quindi quando scrivi greetFn()… stai eseguendo la funzione freccia che avevi passato.
*/

// Esempio con più varianti
function greeter1(greetFn1) {
    console.log("Inizio saluto...");
    greetFn1(); // esegue la funzione passata
    console.log("Fine saluto.");
}

// A. passo una funzione freccia:
greeter1(() => {console.log("Ciao a tutti")});

// B. passo una funzione "normale" già definita:
function salutaInInglese() {
    console.log("Hello everyone");
}
greeter1(salutaInInglese);

// C. passo un'altra funzione anonima:
greeter1(function() {
    console.log("Hola a todos");
});