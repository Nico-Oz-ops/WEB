import React from 'react'

const Persona = ({nome, cognome, eta}) => {

  const divStyle={
          color: "red",
          fontWeight: "600",
          border: "1px #000 solid",
          margin: "15px",
          padding: "15px",
          backgroundColor:"green" 

        }
  return (
    <React.Fragment>
      <div
        style={divStyle}
      >
        {nome} {cognome} {eta}
      </div>
      <footer></footer>
    </React.Fragment>
  );
};


export default Persona