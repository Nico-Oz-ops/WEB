/* Esercizio 1A – Creare un oggetto semplice
Obiettivo: capire come si definisce un oggetto e come si accede alle sue proprietà.*/

// Creo un oggetto "persona"

const persona = {
    nome: "Luca",
    età: 25,
    città: "Roma"
};

// Accesso alle proprietà
console.log(persona.nome); //"Luca" (dot notation)
console.log(persona.età); // 25 (bracket notation)
console.log(persona["età"]); // (bracket notation)

// Posso aggiungere nuove proprietà in qualsiasi momento
persona.professione = "Studente";
console.log(persona.professione);

/*Esercizio 1B
Crea un oggetto chiamato auto che abbia:

    * una proprietà marca con valore "Fiat",
    * una proprietà modello con valore "Panda",
    * una proprietà anno con valore 2010,
    * un metodo descrizione() che ritorna una stringa tipo:
    * "Questa è una Fiat Panda del 2010."*/

const auto = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2010,

    descrizione() {
        return `Questa è una ${this.marca} ${this.modello} del ${this.anno}`
    }
};
console.log(auto.descrizione())