import "./App.css";
import Componente1 from "./Componente1";
import Clock from "./Clock";

function App() {
  let nome = "Nicolino";
  const persone = [{
    id: "1",
    nome: "Nico",
    cognome: "Rossi",
    eta: "37",
  },{
    id: "2",
    nome: "Lolo",
    cognome: "Landa",
    eta: "58",
  },{
    id: "3",
    nome: "Franco",
    cognome: "Rossi",
    eta: "38"
  }]
  const data = new Date();
  // un ciclo for, while, condizioni, ecc., devono essere all'interno della funzione ma non dopo il return
  // cioè, all'interno della JSX
  const clicca=()=>{

    alert("Cliccato da " + nome + " " + cognome);
  }
  return (
    <div className="App">
      <h1>Prima App React {nome}</h1>
      {persone.map((persona)=> {
        return <Componente1 key={persona.id}{...persona} onCliccami={clicca}></Componente1>;
      })}

      <button onClick={clicca} className="btn btn-primary">Cliccami</button>

      <Componente1 {...persone[0]}></Componente1>
      <Componente1 {...persone[1]}/>
      <Componente1 nome={persone[2].nome} cognome={persone[2].cognome} eta={persone[2].eta}></Componente1>

      <h2>{data.toLocaleTimeString() + " " + data.toLocaleDateString()}</h2>

      <Clock country="Italia" timezone={2}></Clock>
      <Clock country="USA (New York)" timezone={-4}></Clock>
      <Clock country="Giappone" timezone={9}></Clock>
    </div>
  );
}
export default App;
