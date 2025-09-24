import React, { useState } from "react";
import Saluto from "./Esercizio_01/Saluto";
import CardUtente from "./Esercizio_02/CardUtente";
import MenuRistorante from "./Esercizio_03/MenuRistorante";
import Termostato from "./Esercizio_04/Termostato";

const Menu = () => {
  const [item, setItem] = useState("");

  const renderContenuto = () => {
    switch (item) {
      case "Saluto":
        return <Saluto/>;
      case "UserCard":
        return <CardUtente/>;
      case "MenuRistorante":
        return <MenuRistorante />;
      case "Termostato":
        return <Termostato />;
      default:
        return null;
    }
  };
  const tabs = ["Saluto", "UserCard", "MenuRistorante", "Termostato"];

  return (
    <div>
      <ul className="nav">
        {tabs.map((t) => (
          <li className="nav-item" key={t}>
            <button
              className={`nav-link ${item === t ? "attivo" : ""}`}
              onClick={() => setItem(t)}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
      <div className="contenuto">{renderContenuto()}</div>
    </div>
  );
};

export default Menu;
