/*
Esercizio 4 – Accesso e aggiornamento di un oggetto

Tema: Oggetti + accesso proprietà + aggiornamento
Obiettivo: Creare un oggetto che rappresenti una persona e modificare alcune proprietà.

Traccia:

    1. Crea un oggetto persona con proprietà: nome, cognome, eta.

    2. Stampa il nome e il cognome usando console.log.

    3. Aggiorna l’età aggiungendo 1 anno.

    4. Aggiungi una nuova proprietà città.

    5. Stampa l’oggetto aggiornato.

Suggerimento: puoi usare sia la notazione punto (persona.nome) sia la notazione parentesi quadre (persona['nome']).
*/

const persona = {
    nome: "Juan",
    cognome: "Doc",
    eta: 52
};
console.log(`Nome: ${persona.nome}\nCognome: ${persona['cognome']}`);

persona.eta += 1

persona.citta = "Alicante";
console.log(persona);
