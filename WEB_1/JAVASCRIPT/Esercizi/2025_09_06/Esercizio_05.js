/*
Esercizio 5 – Gestione di più oggetti

Tema: Array di oggetti + accesso e aggiornamento proprietà
Obiettivo: Dato un array di oggetti “studenti”, aggiornare alcune proprietà e filtrare secondo una condizione.

Traccia:

    1. Crea un array studenti con questi oggetti:
        { nome: "Ana", eta: 20, corso: "JS" }
        { nome: "Luis", eta: 22, corso: "Python" }
        { nome: "Maria", eta: 19, corso: "JS" }
    
    2. Aggiungi una nuova proprietà promosso a ciascun studente inizialmente impostata a false.

    3. Aggiorna promosso a true per tutti gli studenti con età maggiore o uguale a 20.

    4. Stampa solo gli studenti promossi.
*/

// Alternativa 1
const studenti = [
  { nome: "Ana", eta: 20, corso: "JS" },
  { nome: "Luis", eta: 22, corso: "Python" },
  { nome: "Maria", eta: 19, corso: "JS" },
];
console.log(studenti);

studenti.forEach((studente) => {
  studente.promosso = false;
});
console.log(studenti);

studenti.forEach((studente) => {
  if (studente.eta >= 20) {
    studente.promosso = true;
  }
});
console.log(studenti);

studenti.forEach((studente) => {
  if (studente.promosso === true) {
    console.log(studente);
  }
});

// Alternativa 2 - uso di filter e forEach
studenti.filter(studente => studente.promosso).forEach(studente => console.log(studente));
