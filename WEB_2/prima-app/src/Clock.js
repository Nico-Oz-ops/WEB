import React from "react";

const Clock = (props) => {
   const t=Date.now()+3600*props.timezone*1000

  const data = new Date(t);
  
  return (
    <h2>In {props.country} sono le {data.toLocaleTimeString()} del giorno {data.toLocaleDateString()}</h2>
  );
};

export default Clock;
