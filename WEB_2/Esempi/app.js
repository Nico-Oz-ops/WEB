import {API_KEY, SECRET_KEY} from "../../util.js"

console.log(API_KEY);
console.log(SECRET_KEY);
console.log(util.draw("Okkkkk"));


console.log("node")

const arr1=[1,2,3];
let[a,b]=[1,2,3];

arr1.push(4); //push è come append in python
console.log(arr1,...arr1);

// const a=4;
// a=5;
// console.log(a);

const arr2=[...arr1];

arr2.unshift(0);
console.log(arr1, arr2)

const prof={
    nome:"Roberto",
    cognome:"Delisio",
    eta:48
};
let {nome, cognome, eta}=prof
console.log(nome, cognome, eta)

console.log(prof.nome)

const prof1={
    "first name":"Roberto",
    cognome:"Delisio",
    eta:48,
    indirizzo:{
        via:"Cesare pavese",
        citta:"roma"
    }
};

console.log(prof1["first name"])
console.log(prof1.indirizzo.via)

const prof2=new Object();

prof2.nome="rob";
prof2.cognome="del";

console.log(prof2)


// funzione costruttore

function persona(nome='', cognome=''){
    this.nome=nome;
    this.cognome=cognome;
}

// persona.prototype.telefono="12345"

const robdel=new persona('rob', 'del');
robdel.telefono="9876";
const mariorossi=new persona('mario', 'rossi');

console.log(robdel, robdel.telefono, mariorossi)

lista(...arr1)
function lista(){
    console.log("argomenti ", arguments);
}

