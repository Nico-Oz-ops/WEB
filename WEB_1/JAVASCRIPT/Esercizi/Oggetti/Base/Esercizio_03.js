/* Esercizio 3 – Metodi negli oggetti

Obiettivo: aggiungere un metodo all’oggetto per eseguire un’azione.
Traccia:

1. Crea un oggetto calcolatrice con due proprietà: a e b (numeri).
2. Aggiungi un metodo somma() che restituisce la somma di a e b.
3. Aggiungi un metodo moltiplica() che restituisce il prodotto di a e b.
4. Prova a cambiare i valori di a e b e richiama i metodi per vedere il risultato aggiornato. */

const calcolatrice = {
    a: 5,
    b: 4,

    somma() {
        return this.a + this.b
    },
    moltiplica() {
        return this.a * this.b
    } 
};
console.log(calcolatrice.somma())
console.log(calcolatrice.moltiplica())

calcolatrice.a = 6;
calcolatrice.b = 9;
console.log(calcolatrice.somma())
console.log(calcolatrice.moltiplica())