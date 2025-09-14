// Approfondimento sul "this"

/*La differenza principale tra le funzioni definite con la parola chiave `function` 
e le funzioni freccia riguarda il comportamento della parola chiave `this`.

1. Funzioni Normali (`function`)
Nelle funzioni definite con la parola chiave `function`, la parola chiave `this` è 
dinamica: il suo valore viene determinato dal modo in cui la funzione viene chiamata. 
Se una funzione viene chiamata come un metodo di un oggetto, `this` si riferisce
all'oggetto stesso. Se la funzione viene chiamata in modo indipendente, 
`this` si riferisce all'oggetto globale (o è `undefined` in modalità strict).*/

function mostraNome(){
    console.log(this.nome); // this.nome è uguale a dire persona.nome
}
const persona = {
    nome: "Max",
    mostraNome: mostraNome
};
persona.mostraNome(); // Max

const funzioneIsolata = persona.mostraNome;
funzioneIsolata() // undefined o errore in modalità strict

/* 
2. Funzioni Freccia o Arrow Function(`=>`)
Nelle funzioni freccia, il valore di `this` è determinato dal contesto 
in cui la funzione è stata definita, non da come viene chiamata. In altre parole, 
le funzioni freccia ereditano il valore di `this` dal loro scope circostante 
al momento della definizione.*/

const persona_2 = {
    nome: "Max",
    mostraNome: function(){ // mostraNome è una funzione, non è un parametro, è metodo dell'oggetto
        setTimeout(()=>{ // arrow function passa come parametro di setTimeout
            console.log(this.nome);
        }, 1000);
    }
};
persona_2.mostraNome(); // "Max" dopo 1 secondo

//Regola pratica: tutto ciò che scrivi dentro le parentesi di una funzione 
//(setTimeout(...), greeter(...), ecc.) e che è una funzione, è passato come argomento.

/*Spiegazione del codice:
1. L'oggetto
Ho un oggetto persona_2 con:
- una proprietà nome: "Max",
- un metodo mostraNome che usa setTimeout.

2. Quando chiamo persona_2.mostraNome()
- Viene eseguita la funzione mostraNome.
- Dentro di essa parte setTimeout, che dice: 
“esegui questa funzione fra 1000 ms (1 secondo)”.

3. La funzione dentro setTimeout
Si usa una arrow function:
() => {
    console.log(this.nome);
}

Le arrow function hanno una caratteristica importante:
non creano un nuovo this, ma ereditano il this dal contesto in cui sono scritte.
In questo caso il contesto è mostraNome, e dentro mostraNome, il this si riferisce all’oggetto persona_2.

Quindi this.nome = "Max".

Caso ipotetico
Se avessi scritto:

setTimeout(function() {
    console.log(this.nome);
}, 1000);

In questo caso this non sarebbe più persona_2, ma l’oggetto globale 
7(window nel browser, undefined in strict mode con Node).
Risultato: undefined.
Ecco perché si usa l’arrow function: per mantenere il legame con persona_2.


- Le funzioni normali hanno un `this` dinamico che dipende da come vengono chiamate.
- Le funzioni freccia hanno un `this` lessicale che dipende da dove vengono definite.
*/