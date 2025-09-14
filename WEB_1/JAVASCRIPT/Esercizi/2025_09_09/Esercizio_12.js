/*
Esercizio 12 – Studenti ordinati per media

Tema: Array di oggetti + sort
Obiettivo: Ordinare gli studenti in base alla loro media, dal più alto al più basso.

Traccia:

    1. Parti da un array di studenti, ciascuno con nome e voti.

    2. Calcola la media dei voti di ogni studente.

    3. Ordina l’array in base alla media decrescente e crescente.

    4. Stampa l’array ordinato (le due versioni: crescente e decrescente).

Suggerimento: Usa una funzione di supporto per calcolare la media e il metodo sort con una callback personalizzata.
*/

// Alternativa 1
const studenti = [
    {nome: "Nico", voti: [7, 9, 10, 8]},
    {nome: "Aurelio", voti: [5, 8, 4, 7]},
    {nome: "Silvana", voti: [10, 9, 8, 9]},
    {nome: "Lorena", voti: [4, 10, 8, 6]},
];

const media_studente = studenti.map(studente => {
    const media = studente.voti.reduce((acc, voto) => acc + voto, 0) / studente.voti.length;
    return {nome: studente.nome, media: Number(media.toFixed(2))};
});
console.log(media_studente);

// array ordinato in maniera crescente
media_studente.sort((a, b) => a.media - b.media);
console.log(media_studente);

// array ordinato in maniera decrescente
media_studente.sort((a, b) => b.media - a.media);
console.log(media_studente);


// Alternativa 2 - uso di callback
console.log("-------------------------------------------------------------")
// callback per ordinamento crescente
function ordinamentoCrescente(a, b){
    return a.media - b.media
};

// callback per ordinamento decrescente
function ordinamentoDecrescente(a, b){
    return b.media - a.media 
};

// array ordinato crescente
media_studente.sort(ordinamentoCrescente);
console.log("Ordine crescente:", media_studente)

// array ordinato decrescente
media_studente.sort(ordinamentoDecrescente);
console.log("Ordine decrescente:", media_studente);


