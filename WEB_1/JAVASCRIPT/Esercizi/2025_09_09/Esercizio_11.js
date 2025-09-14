/*
Esercizio 11 – Nomi degli studenti con media alta

Tema: Array di oggetti + map, filter, reduce
Obiettivo: Creare una stringa con i nomi degli studenti con media ≥ 8 separati da virgola.

Input di esempio:

const studenti = [
  { nome: "Alice", media: 7 },
  { nome: "Bruno", media: 8.5 },
  { nome: "Carla", media: 9 },
  { nome: "Davide", media: 6.5 }
];

Traccia:

1. Filtra gli studenti con media ≥ 8.

2. Usa map per ottenere un array dei nomi.

3. Usa reduce per concatenarli in una stringa separata da virgola.
*/

const studenti = [
  { nome: "Alice", media: 7 },
  { nome: "Bruno", media: 8.5 },
  { nome: "Carla", media: 9 },
  { nome: "Davide", media: 6.5 },
];

// studenti con media >= 8
const studenti_media_8 = studenti.filter((studente) => studente.media >= 8);
console.log(studenti_media_8);

// array dei nomi (non c'è più un oggetto studente)
const studenti_nomi = studenti_media_8.map((studente) => {
    return studente.nome;
});
console.log(studenti_nomi);

// concatenazione in una stringa separata da virgola
const nomi_stringa = studenti_nomi.reduce((acc, nome, i) => i === 0 ? nome : acc + ", " + nome, "");
console.log(nomi_stringa);




// versione unione dei metodi
const studenti_media_nome = studenti
  .filter((studente) => studente.media >= 8)
  .map((studente) => studente.nome)
  .reduce((acc, nome, i) => i === 0 ? nome : acc + ", " + nome,"");

console.log(studenti_media_nome);



// uso di join
const nomi_stringa_2 = studenti
  .filter(studente => studente.media >= 8)
  .map(studente => studente.nome)
  .join(", ");

console.log(nomi_stringa);

/*
join(", ") prende tutti gli elementi dell’array e li concatena in una stringa separata da virgola e spazio.

Funziona esattamente come il reduce che usavamo prima, ma è più leggibile.
*/
