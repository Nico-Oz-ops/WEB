import { API_KEY } from './util.js';
console.log(API_KEY);

// variante export (un solo elemento)
import miaChiave from './util.js';
console.log(miaChiave);

// variante export (esportazione multipla)
import * as util from './util.js';
console.log(util.API_KEY);

//-----------------------------------------//

// importare più elementi esportati da un singolo file, sintassi:
import { API_KEY_2, ANOTHER_VARIABLE } from './util.js';
console.log(API_KEY_2, ANOTHER_VARIABLE);

// se importo un gran numero di esportazioni da un modulo (util.js) e desidero 
// raggrupparle in un unico oggetto ('util'), la sintassi è:
import * as util from './util.js';
console.log(util.API_KEY_2);
console.log(util.ANOTHER_VARIABLE);



