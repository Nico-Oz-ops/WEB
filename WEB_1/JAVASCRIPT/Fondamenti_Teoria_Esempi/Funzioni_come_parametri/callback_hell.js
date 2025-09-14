// Il problema del "Callback Hell"
/* Quando abbiamo molte operazioni asincrone in sequenza, il codice può diventare difficile da leggere: */

setTimeout(function() {
    console.log("Prima operazione");
    setTimeout(function() {
        console.log("Seconda operazione");
        setTimeout(function() {
            console.log("Terza operazione");
            // e così via...
        }, 1000);
    }, 1000);
}, 1000);

// Esempio reale con richieste

// simulazione di richieste al server:
function ottieniUtente(id, callback) {
    setTimeout(() => {
        callback({id: id, nome: "Mario"});
    }, 1000);
}

function ottieniOrdini(utente, callback){
    setTimeout(() => {
        callback(['Ordine 1', 'Ordine 2']);
    }, 1000);
}

// utilizzo:
ottieniUtente(123, function(utente) {
    console.log("Utente ottenuto:", utente.nome);
    ottieniOrdini(utente, function(ordini){
        console.log("Ordini ottenuti:", ordini);
    });
});

/*Spiegazione
La function(utente) { ... } è esattamente l’argomento passato al parametro callback.
Ed è per questo che dentro quella funzione ho accesso all’oggetto utente che mi “ritorna” dal server simulato.

- callback è un posto riservato per una funzione.
- Quando chiamo ottieniUtente, gli passo la mia funzione anonima.
- Poi sarà ottieniUtente a decidere quando e con quali dati eseguirla.


Se la chiamata non fosse stata annidata, allora chiamerò ottieniOrdini prima di avere i dati dell’utente, 
quindi non saprei a chi appartengono gli ordini. 
Quando ho tante operazioni asincrone che dipendono l’una dall’altra, inizio a fare “piramidi” di callback annidate (callback hell):

operazione1(dati, function(ris1) {
    operazione2(ris1, function(ris2) {
        operazione3(ris2, function(ris3) {
            ...
        });
    });
});

Ed è proprio il motivo per cui in JavaScript oggi si usano:

- Promise (.then(...))
- async/await (che rende il codice più leggibile, come se fosse sincrono).
*/