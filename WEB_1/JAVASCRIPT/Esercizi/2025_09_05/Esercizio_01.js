/*
Esercizio 1 – Variabili e tipi

Crea tre variabili:

    * nome → stringa
    * eta → numero
    * isStudente → booleano

Stampa in console un messaggio del tipo: "Mario ha 25 anni e non è studente" usando le variabili.

Suggerimenti / indizi:

    - Per dichiarare le variabili puoi usare let o const.
    - La variabile boolean può essere true o false.
    - Per costruire il messaggio puoi usare template literal (le backtick `) e ${} per 
      inserire le variabili dentro la stringa.
*/

const nome = "Mario"
const eta = 25
const isStudente = false

console.log(`${nome} ha ${eta} anni e ${isStudente ? "è studente" : "non è studente"}`)


/*Sintassi del inline:
condizione ? valore_se_vero : valore_se_falso
*/