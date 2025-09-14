/* Esercizio 2 – Aggiungere e modificare proprietà

Traccia:

Crea un oggetto studente con proprietà: nome, cognome e eta.
Aggiungi una nuova proprietà corso dopo la creazione.
Modifica il valore di eta.

Stampa l’oggetto per vedere i cambiamenti.*/

const studente = {
    nome: "Mattia",
    cognome: "Bianchi",
    età: 19
};
console.log(studente);

studente.corso = "Javascript";
console.log(studente)

studente.età = 21;
console.log(studente)