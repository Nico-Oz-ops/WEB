/*
Esercizio 10 – Trasforma array con spread e destrutturazione

Traccia:

    1. Usa lo stesso array di studenti.

    2. Crea un nuovo array studentiBonus dove:

    3. Ogni studente ha una nuova proprietà bonus: true se la media >= 8, altrimenti bonus: false.

    4. Usa lo spread operator per non modificare l’array originale.

    5. Stampa il nuovo array.

Esempio di array:

const studenti = [
  { nome: "Anna", voti: [7, 8, 9] },
  { nome: "Luca", voti: [6, 5, 7] },
];
*/

const studenti = [
    {nome: "Anna", voti: [7, 8, 9]},
    {nome: "Luca", voti: [6, 5, 7]},
    {nome: "Paolo", voti: [6, 5, 6]},
];

function calcolaMedia(voti){
    const somma_voti = voti.reduce((acc, voto) => acc + voto, 0);
    return somma_voti / voti.length;
};

const studentiBonus = studenti.map(studente => { // map per creare un nuovo array senza modificare l’array originale studenti
    return {...studente, bonus: calcolaMedia(studente.voti) >= 8}; // lo spread operator ({...studente}) copia tutte le 
                                                                   // proprietà dello studente.
});

console.log(studentiBonus);


// se avessi utilizzato il callback, allora:
// creo una funzione:
function aggiungoBonus(studenti, callbackMedia){
    return studenti.map(studente => {
        return {...studente, bonus: callbackMedia(studente.voti) >= 8};
    });
};

const studentiBonus_2 = aggiungoBonus(studenti, calcolaMedia);
console.log(studentiBonus_2);