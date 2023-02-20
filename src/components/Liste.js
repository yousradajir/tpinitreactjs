/**
* <DAJIR Yousra>
* Version 1.0
*/
import React from "react";
import Personn from "../classes/Personn";

const personnes = [
  new Personn(1, "Dolon", "Pauline", "1 rue de Metz", "54000", 24),
  new Personn(2, "Dajir", "Yousra", "310 avenue berthelot", "69008", 23),
  new Personn(3, "Moinier", "Coralie", "86 rue de la République", "69003", 32)
];

function PeopleTable() {
    console.log(personnes)
    return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Adresse</th>
          <th>Code Postal</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {personnes.map((personnes) => (
          <tr key={personnes.id}>
            <td>{personnes.id}</td>
            <td>{personnes.nom}</td>
            <td>{personnes.prenom}</td>
            <td>{personnes.adresse}</td>
            <td>{personnes.codePostal}</td>
            <td>{personnes.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PeopleTable;
