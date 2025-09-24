import React from "react";
import piatti2 from "../piatti";

const MenuRistorante2 = () => {
  return (
    <ul>
      {piatti2.map((p) => (
        <li
          key={p.id}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{p.nome}</span>
          <span className="badge bs-success">${p.prezzo}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuRistorante2;
