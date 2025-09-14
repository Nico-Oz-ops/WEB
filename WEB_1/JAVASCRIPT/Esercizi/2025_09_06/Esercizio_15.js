/*
Esercizio 15 – Studenti top e bonus

Tema: Array di oggetti + funzioni + filter + forEach
Obiettivo: Aggiungere una proprietà bonus: true agli studenti con media >= 8 e stampare l’array finale.

Traccia:

    1. Usa lo stesso array di studenti con nome, voti e corso.
    2. Calcola la media di ciascuno.
    3. Filtra gli studenti con media >= 8.
    4. Aggiungi bonus: true a ciascuno.
    5. Stampa l’array finale.
*/

const studenti = [
  { nome: "Carlos", voti: [5, 6, 9], corso: "Informatica" },
  { nome: "Ruben", voti: [7, 5, 8], corso: "JS" },
  { nome: "Carlotta", voti: [7, 10, 8], corso: "JS" },
  { nome: "Ottavia", voti: [9, 9, 6], corso: "Fisica" },
];

// Alternativa 1

function media(voti){
    const somma = voti.reduce((acc, voto) => acc + voto, 0);
    return somma / voti.length;
};

const studente_media = studenti.filter(studente => media(studente.voti) >= 8);
const sm_finale = studente_media.map(studente => {
    studente.bonus = true;
    return studente
});
console.log(sm_finale);

// Alternativa 2

function media_voti(voti){
    const somma_voti = voti.reduce((acc, voto) => acc + voto, 0);
    return somma_voti / voti.length;
};

const studenti_media_maggiore = studenti.filter(studente => media_voti(studente.voti) >= 8).map(studente => 
    ({...studente, bonus: true}));

console.log(studenti_media_maggiore);

// Alternativa 3 - quella giusta secondo quello che chiede la traccia

function media_dei_voti(voti){
    const sum = voti.reduce((acc, voto) => acc + voto, 0);
    return sum / voti.length;
};

const studenti_top = studenti.filter(studente => media_dei_voti(studente.voti) >= 8);

studenti_top.forEach(studente => {
    studente.bonus = true;
});
console.log(studenti_top)

console.log(studenti)



