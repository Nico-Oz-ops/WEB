import React from "react";

const Componente1 = (props) => {
  console.log(props);
  const divStyle={
          color: "red",
          fontWeight: "800",
          border: "1px #000 solid",
          margin: "15px",
          padding: "15px",
          backgroundColor:"yellow" 

        }
  return (
    <React.Fragment>
      <div
        style={divStyle}
      >
        {props.nome} {props.cognome} di anni {props.eta}
        <Anagrafica></Anagrafica>
        <Messaggio></Messaggio>
         <button onClick={props.onCliccami} className="btn btn-primary">Cliccami</button>
      </div>
      <footer></footer>
    </React.Fragment>
  );
};

export const Anagrafica = () => {
  return <div>Anagrafica</div>;
};

export const Messaggio = () => {
  return <div>Messaggio</div>;
};

export default Componente1;
