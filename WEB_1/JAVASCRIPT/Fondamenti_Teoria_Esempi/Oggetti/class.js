// Un altro modo per creare oggetti è utilizzare le classi. 
// Una classe funge da "progetto" per creare oggetti

class Utente{
    constructor(nome, eta) {
        this.nome = nome;
        this.eta = eta;
    }
    saluta(){
        console.log("Ciao" + " " + this.nome);
    }
}
//`utenteUno` è un'istanza della classe `Utente` e ha accesso al metodo `saluta`.
const utenteUno = new Utente("Manuel", 35);
console.log(utenteUno)
utenteUno.saluta()