import React from "react";
//<Componente1 {...persona1}></Componente1>
const Componente1 = ({props}) => {
    const divStyle={
          color: "red",
          fontWeight: "800",
          border: "1px #000 solid",
          margin: "15px",
          padding: "15px",
          backgroundColor: "yellow"
        }
    return (
    <>
      <div
      style={divStyle}
      >
        {props.nome} {props.cognome} ha {props.eta} anni
        <Anagrafica></Anagrafica>
        <Messaggio></Messaggio>
        
      </div>
      <footer></footer>
    </>
  );
};

const Anagrafica = () => {
  return <div>Anagrafica</div>;
};

const Messaggio = () => {
  return <div>Messaggio</div>;
};
export default Componente1;
