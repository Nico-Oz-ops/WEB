/*Esercizio 4 – Gestione del conto bancario

1. Crea un oggetto contoBancario con proprietà:

    * intestatario (stringa)
    * saldo (numero, inizialmente 0)

2. Aggiungi metodi:

    * deposito(importo) → aumenta il saldo del valore passato e stampa il saldo aggiornato.
    * prelievo(importo) → diminuisce il saldo del valore passato se sufficiente, altrimenti stampa un messaggio di errore.
    * mostraSaldo() → stampa il saldo attuale.

3. Prova a fare:

    * depositare 500
    * prelevare 200
    * mostrare il saldo
*/

const contoBancario = {
    intestatario: "Luis",
    saldo: 0,

    deposito(importo) {
        this.saldo += importo
    },
    prelievo(importo) {
        if (this.saldo >= importo){
            this.saldo -= importo
        } else {
            console.log("Errore, saldo insufficiente")
        }
    },
    mostraSaldo() {
        return "Saldo attuale: " + this.saldo
    }
};
console.log(contoBancario.mostraSaldo()) // saldo attuale: 0 euro

contoBancario.deposito(9750) // deposito 9750
console.log(contoBancario.mostraSaldo()) // saldo attuale: 9750 euro

contoBancario.prelievo(1775) // prelievo 1775
console.log(contoBancario.mostraSaldo()) // saldo attuale: 7975 euro


