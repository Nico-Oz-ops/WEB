/*
Esercizio 17 – forEach + async/await

Obiettivo: Iterare su un array di studenti e stampare la media con un ritardo simulato.

Traccia:

Parti dall’array di studenti:
const studenti = [
  { nome: "Nico", voti: [7, 9, 10, 8] },
  { nome: "Aurelio", voti: [5, 8, 4, 7] },
  { nome: "Silvana", voti: [10, 9, 8, 9] },
  { nome: "Lorena", voti: [4, 10, 8, 6] },
];

1. Crea la funzione media_voti(voti) come già fatto prima.

2. Crea una funzione ritarda(ms) che restituisce una Promise che si risolve dopo ms millisecondi.

3. Usa forEach su studenti e dentro il callback:

4. Usa await ritarda(1000) per simulare il ritardo di 1 secondo prima di stampare la media.

5. Stampa: "Lo studente Nico ha una media di 8.5" (come prima).

Suggerimento:

Dovrai usare un for…of invece di forEach se vuoi usare await direttamente, 
perché forEach non gestisce bene async/await.
*/

const studenti = [
  { nome: "Nico", voti: [7, 9, 10, 8] },
  { nome: "Aurelio", voti: [5, 8, 4, 7] },
  { nome: "Silvana", voti: [10, 9, 8, 9] },
  { nome: "Lorena", voti: [4, 10, 8, 6] },
];

// calcolare la media dei voti
function media_voti(voti){
    const somma_voti = voti.reduce((acc, voto) => acc + voto, 0);
    return Number((somma_voti / voti.length).toFixed(2))
};

function ritarda(ms){
    return new Promise (resolve => {
        setTimeout(() => resolve(), ms)
    })
};

async function chiamata(){
    for(const studente of studenti) {
        await ritarda(1000)
        console.log(`Lo studente ${studente.nome} ha una media di ${media_voti(studente.voti)}`)
    } 
}

chiamata();