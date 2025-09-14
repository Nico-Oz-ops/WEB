// Variabili in un oggetto
let persona = {
    nome: "Anna",
    eta: 25,
    isStudente: true
};

console.log(persona);

// se volessi modificare una proprietà all'interno della variabile oggetto, la sintassi:
persona.nome = "Juan"
persona.eta = "35"
persona.isStudente = false 

console.log(persona)


persona.nome = "Mario"
persona.eta = "63"
// se volessi rimuovere una proprietà, la sintassi:
delete persona.isStudente

console.log(persona)