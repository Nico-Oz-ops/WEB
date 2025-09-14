/*
Esercizio 8 – Somma dei voti con callback

Traccia:

    1. Crea un array di oggetti studenti, ognuno con nome e voti (array di numeri).

    2. Scrivi una funzione calcolaMedia che riceve un array di voti e restituisce la media.

    3. Scrivi una funzione stampaMedia che prende uno studente e una callback per calcolare 
       la media, e stampa "Nome: X, Media: Y".

    4. Applica stampaMedia a tutti gli studenti usando forEach e una callback arrow function.

Esempio di array:

const studenti = [
  { nome: "Anna", voti: [7, 8, 9] },
  { nome: "Luca", voti: [6, 5, 7] },
];
*/

const studenti = [
  { nome: "Anna", voti: [7, 8, 9] },
  { nome: "Luca", voti: [6, 5, 7] },
];

function calcolaMedia(voti){
    const somma = voti.reduce((acc, voto) => acc + voto, 0);
    return somma / voti.length;
};

function stampaMedia(studente, callback){
    console.log("Nome:", studente.nome, "Media:", callback(studente.voti));
};

studenti.forEach(studente => stampaMedia(studente, calcolaMedia));