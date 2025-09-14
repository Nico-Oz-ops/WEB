// A. Sintassi funzione (usando function)

/* si utilizza la parola chiave `function`, seguita da un nome e da un 
elenco di parametri racchiusi tra parentesi tonde. Il corpo della funzione è
delimitato da parentesi graffe e contiene il codice che verrà eseguito quando 
la funzione viene chiamata*/
function saluta(nomeUtente, messaggio){
    console.log(nomeUtente + ": " + messaggio);
}

// B. Chiamata di una funzione

/*Una funzione definita non viene eseguita automaticamente. Per eseguirla, 
è necessario chiamarla utilizzando il suo nome seguito da parentesi tonde*/
saluta("Max", "Ciao");
saluta("Manuel", "Come va?");

// C. Parametri e valori predefiniti

/*Le funzioni possono accettare parametri, che sono variabili utilizzate 
all'interno della funzione. È anche possibile assegnare valori predefiniti 
ai parametri.*/
function saluta_2(nomeUtente="Utente", messaggio="Ciao"){
    console.log(nomeUtente + ": " + messaggio);
}
saluta_2()

// D. Valore di ritorno

/*Le funzioni possono anche restituire un valore utilizzando la parola chiave `return`.*/
function creaSaluto(nomeUtente, messaggio){
    return nomeUtente + ": " + messaggio;
}

const saluto1 = creaSaluto("Max", "Ciao")
const saluto2 = creaSaluto("Manuela", "Come stai?")
console.log(saluto1)
console.log(saluto2)