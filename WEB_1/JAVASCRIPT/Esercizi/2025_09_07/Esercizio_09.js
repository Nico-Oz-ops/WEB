/*
Esercizio 9 – Filtra studenti promossi

Traccia:

    1. Usa lo stesso array studenti.

    2. Scrivi una funzione promossi che prende l’array di studenti e una callback per calcolare la media.

    3. La funzione restituisce un nuovo array con gli studenti che hanno media >= 6.

    4. Stampa i nomi degli studenti promossi.

Esempio di array:

const studenti = [
  { nome: "Anna", voti: [7, 8, 9] },
  { nome: "Luca", voti: [6, 5, 7] },
];

Bonus: 
 - creare un nuovo array studentiBonus dove ogni studente ha una proprietà bonus: true se la media >= 8, 
   altrimenti bonus: false, usando lo spread operator senza modificare l’array originale.
*/

const studenti = [
    {nome: "Anna", voti: [7, 8, 9]},
    {nome: "Luca", voti: [6, 5, 7]},
    {nome: "Paolo", voti: [6, 5, 6]},
];

function calcoloMedia(voti){
    const somma = voti.reduce((acc, voto) => acc + voto, 0);
    return somma / voti.length
};

function promossi(studenti, callback){
    return studenti.filter(studente => callback(studente.voti) >= 6);
};

const studenti_top = promossi(studenti, calcoloMedia);

console.log("Gli studenti con media >= 6 sono:")
studenti_top.forEach(studente => console.log(studente.nome));

// bonus
const studentiBonus = studenti.map(studente => {
    return {...studente, bonus: calcoloMedia(studente.voti) >= 8};
});
console.log(studentiBonus);