/*
Esercizio 16 – Stampa report studenti

Tema: Array di oggetti + forEach
Obiettivo: Usare forEach per stampare informazioni sugli studenti.

Traccia:

    1. Parti da un array di studenti con nome e voti.

    2. Calcola la media dei voti con la tua funzione media_studente.

    3. Con forEach, stampa una frase del tipo: "Lo studente Nico ha una media di 8.5"

Suggerimento: All’interno del callback di forEach puoi richiamare media_studente(studente.voti).
*/

const studenti = [
  { nome: "Nico", voti: [7, 9, 10, 8] },
  { nome: "Aurelio", voti: [5, 8, 4, 7] },
  { nome: "Silvana", voti: [10, 9, 8, 9] },
  { nome: "Lorena", voti: [4, 10, 8, 6] },
];

// calcolo della media dei voti
function media_voti(voti){
    const somma_voti = voti.reduce((acc, voto) => acc + voto, 0);
    return Number((somma_voti / voti.length).toFixed(2));
};

studenti.forEach(studente => {
    const media = media_voti(studente.voti);
    console.log(`Lo studente ${studente.nome} ha una media di ${media}`);
});


