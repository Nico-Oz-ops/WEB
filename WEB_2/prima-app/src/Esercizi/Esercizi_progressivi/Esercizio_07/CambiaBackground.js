/*2. Cambia Background
 
Obiettivo: Crea un'app che cambia il colore dello sfondo della pagina ogni volta che si clicca un bottone.
 
Requisiti:
 
- Un titolo che dice "Cambia Background"
 
    * 3 bottoni per cambiare il colore di sfondo (Rosso, Verde, Blu)
    * useState per memorizzare il colore di sfondo
 
- Il colore dello sfondo cambierà quando clicchi un bottone
 
Concetti: gestione dei colori, inline styles, handling di eventi
*/
// import React, { useState } from "react";

// const CambiaBackground = () => {
//   
//   const [bgColor, setBgColor] = useState("");

//   
//   const cambiaSfondo = (colore) => {
//     setBgColor(colore);
//   };
// };
// return (
//   <div
//     style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}
//   >
//     <h1>Cambia Background </h1>
//     <button
//       style={{ backgroundColor: "red", marginRight: "5px" }}
//       onClick={() => cambiaSfondo("red")}
//     >
//       Rosso
//     </button>
//   </div>
// );

// export default CambiaBackground;

import React, { useState } from 'react'

const CambiaBackground = () => {
    // Inizializzo lo stato "bgColor" a una stringa vuota. Questo stato terrà traccia del colore di sfondo
    const [bgColor, setBgColor] = useState("")

    // Funzione che cambia il colore di sfondo in base al colore passato come argomento
    const cambiaSfondo = (colore) => {
        setBgColor(colore)
        document.body.style.backgroundColor = colore
    }
  return (
    <div style={{backgroundColor: bgColor}}>
        <h1 style={{color: "brown"}}>Cambia Background 🎨</h1>
        <button onClick={() => cambiaSfondo("red")}>Rosso</button>
        <button onClick={() => cambiaSfondo("green")}>Verde</button>
        <button onClick={() => cambiaSfondo("blue")}>Blu</button>      
    </div>
  )
}

export default CambiaBackground;


//   return (
//     <div style={{backgroundColor: bgColor, minHeight: "100vh", padding: "20px"}}>
//         <h1 style={{color: "yellow"}}>Cambia Background 🎨</h1>
//         <button onClick={() => cambiaSfondo("red")}>Rosso</button>
//         <button onClick={() => cambiaSfondo("green")}>Verde</button>
//         <button onClick={() => cambiaSfondo("blue")}>Blu</button>      
//     </div>
//   )
// }
