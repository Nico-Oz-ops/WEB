/*
Esercizio 11 – Studenti bonus e promossi

Traccia:

1. Hai un array di studenti, ognuno con nome, corso e voti (array di numeri).

2. Scrivi una funzione calcolaMedia per calcolare la media dei voti.

3. Scrivi una funzione elaboraStudenti che riceve:

    * l’array di studenti,

    * una callback per calcolare la media.
      Questa funzione deve restituire un nuovo array in cui:

        * ogni studente ha una nuova proprietà media,

        * una proprietà bonus: true se la media ≥ 8, altrimenti false.

4. Filtra solo gli studenti promossi (media ≥ 6).

5. Stampa in console la lista finale con solo nome, corso, media e bonus.
*/

const studenti = [
    {nome: "Juan", corso: "Python", voti: [5, 9, 10, 8]},
    {nome: "Marcello", corso: "JS", voti: [7, 5, 5, 6]},
    {nome: "Pietro", corso: "JS", voti: [6, 4, 6, 5]},
    {nome: "Ximena", corso: "Python", voti: [10, 8, 7, 8]},
];

function calcolaMedia(voti) {
    const somma_voti = voti.reduce((acc, voto) => acc + voto, 0);
    return somma_voti / voti.length; 
};

function elaboraStudenti(studenti, callbackMedia){
    return studenti.map(studente => {
        return {...studente, media: callbackMedia(studente.voti), bonus: callbackMedia(studente.voti) >= 8};
    });
};

// nuovo array con l'aggiunta delle proprietà "media" e "bonus"
const aggiornato_studenti = elaboraStudenti(studenti, calcolaMedia);
console.log(aggiornato_studenti);

// studenti con media >= 6
const studenti_promossi = aggiornato_studenti.filter(studente => studente.media >= 6);
console.log(studenti_promossi);

// stampo nome, corso, media e bonus - senza array
studenti_promossi.forEach(({nome, corso, media, bonus}) => {
    console.log("Nome:", nome, "Corso:", corso, "Media voti:", media, "Bonus:", bonus);
});

// stampo nome, corso, media, bonus - con array
const array_finale = studenti_promossi.map(({nome, corso, media, bonus}) => {
        return {nome: nome, corso: corso, media: media, bonus: bonus};
});
console.log(array_finale)

const array_finale_2 = studenti_promossi.map(({nome, corso, media, bonus}) => 
    ({nome: nome, corso: corso, media: media, bonus: bonus})); // la parentesi tonde esterne servono per restituire direttamente un oggetto, senza uso di {return}
console.log(array_finale_2)
