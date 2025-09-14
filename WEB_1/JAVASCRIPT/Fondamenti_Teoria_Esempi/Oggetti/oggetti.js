// Gli oggetti

/*Gli oggetti in JavaScript servono per raggruppare più valori sotto un'unica entità*/

const utente = { // oggetto "utente"
    nome: "Nico",
    eta: 37
};

// per accedere ai singoli campi,si usa la notazione a punti: "utente.nome"

// Oltre a contenere semplici coppie chiave-valore, gli oggetti possono anche avere funzioni, chiamate metodi:
const utente_2 = {
    nome: "Nico",
    eta: 37,
    saluta: function(){
        console.log("Ciao" + ", " + this.nome);
    }
};
// Posso chiamare questo metodo con `utente_2.saluta()`. All'interno di un metodo, 
// posso usare la parola chiave `this` per accedere ad altre proprietà dell'oggetto.
utente_2.saluta()

