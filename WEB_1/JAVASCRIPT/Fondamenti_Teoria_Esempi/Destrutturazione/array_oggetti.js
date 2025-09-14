/*Con la destrutturazione, possiamo creare queste due costanti in un unico passaggio. 
Basta utilizzare le parentesi quadre a sinistra del segno di uguale. Questa sintassi ci permette 
di estrarre i valori dall'array e assegnarli a nuove variabili in modo più conciso.

La destrutturazione può essere utilizzata anche con gli oggetti.bSupponiamo di avere un oggetto `user` 
con campi come `name` e `age`. Anche in questo caso, potremmo voler estrarre questi valori in costanti 
o variabili separate. Invece di farlo manualmente, possiamo utilizzare la destrutturazione con parentesi graffe.

È importante notare che, mentre con la destrutturazione di array possiamo scegliere i nomi delle variabili, 
con gli oggetti dobbiamo utilizzare i nomi delle proprietà esistenti. Tuttavia, è possibile assegnare un 
alias a queste proprietà utilizzando i due punti.*/

// Esempio 1: destrutturazione di un Array
const userData = ['Nico', 'Rojas'];

// Metodo tradizionale per estrarre i dati da un array:
const firstname = userData[0];
const lastname = userData[1];
console.log(firstname)
console.log(lastname)

// Metodo della destrutturazione per estrarre i dati da un array:
const [firstname1, lastname1] = userData;
console.log(firstname1);
console.log(lastname1);



// Esempio 2: destrutturazione di un Oggetto
const user = {
    nome: "Javi",
    eta: 30
};

// Metodo tradizionale per estrarre i dati da un oggetto:
const nomeOld = user.nome;
const etaOld = user.eta;
console.log(nomeOld);
console.log(etaOld);

// Metodo della destrutturazione per estrare i dati da un oggetto:
const { nome, eta } = user;
console.log(nome);
console.log(eta);



// Esempio 3. Destrutturazione con alias
const user2 = {
    nome: "Marcello",
    eta: 45
};

const {nome: userName, eta: userAge} = user2;

console.log(userName);
console.log(userAge);
