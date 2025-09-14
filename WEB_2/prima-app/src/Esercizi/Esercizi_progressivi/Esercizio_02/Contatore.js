/*
Esercizio 2 – useState e gestione click

Obiettivo: Creare un contatore che aumenta ogni volta che clicchi un pulsante.
*/

import React, { useState } from "react";

function Contatore(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Hai cliccato {count} volte</p>
            <button onClick={() => setCount(count + 1)}>Cliccami</button>
        </div>
    );
}

export default Contatore;