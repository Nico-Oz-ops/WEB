//Esercizio 5A

// Classe base
class Animale {
    verso() {
        return "Suono generico";
    }
}

// Sottoclassi che sovrascrivono il metodo verso()
class Cane extends Animale {
    verso() {
        return "Bau! Bau!";
    }
}

class Gatto extends Animale {
    verso() {
        return "Miao!";
    }
}

// Creiamo oggetti diversi
const animali = [new Cane(), new Gatto()];

// Polimorfismo: stesso metodo, comportamenti diversi
animali.forEach(animale => {
    console.log(animale.verso());
});






/*
Esercizio 5B – Figure geometriche

Tema: Oggetti e metodi polimorfici
Obiettivo: Calcolare aree e perimetri usando lo stesso metodo su oggetti diversi.

Traccia dettagliata:

1. Crea un oggetto base Forma con metodi generici area() e perimetro() che al momento restituiscono 0.

2. Crea oggetti specifici: Rettangolo, Cerchio, Triangolo.

    * Ogni oggetto deve avere proprietà necessarie (es. base, altezza, raggio).
    * Ogni oggetto deve sovrascrivere area() e perimetro() per calcolare i valori corretti.

3. Crea un array forme che contiene più oggetti diversi.

4. Usa un ciclo for per stampare area e perimetro di tutte le forme.
*/

class Forma {
    area(){
        return 0;
    }
    perimetro(){
        return 0;
    }
};

class Rettangolo extends Forma {
    constructor(base, altezza){
        super();
        this.base = base;
        this.altezza = altezza;
    }
    area(){
        return this.base * this.altezza;
    }
    perimetro(){
        return (this.base + this.altezza) * 2;
    }

};

class Cerchio extends Forma {
    constructor(raggio){
        super();
        this.raggio = raggio;
    }
    area(){
        return Math.PI * this.raggio ** 2;
    }
    perimetro(){
        return Math.PI * this.raggio * 2;
    }

};

class Triangolo extends Forma {
    constructor(base, altezza, lato1, lato2, lato3){
        super();
        this.base = base;
        this.altezza = altezza;
        this.lato1 = lato1;
        this.lato2 = lato2;
        this.lato3 = lato3;
    }
    area(){
        return (this.base * this.altezza) / 2;
    }
    perimetro(){
        return this.lato1 + this.lato2 + this.lato3;
    }
};

const forme = [
    new Rettangolo(2, 9),
    new Cerchio(6),
    new Triangolo(3, 5, 7, 3, 5)
]

forme.forEach((forma) => {
    console.log(`**${forma.constructor.name}**\nArea: ${forma.area().toFixed(2)}\nPerimetro:${forma.perimetro().toFixed(2)}\n`);
});

