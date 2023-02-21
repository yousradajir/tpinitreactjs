/**
* <DAJIR Yousra>
* Version 1.0
*/
import React from "react";
import { personnesJSON } from "../classes/Personn";



function PeopleTable() {
    return (
    <table>
      <thead>
        <tr>
          <th> ID </th>
          <th> Nom </th>
          <th> Prénom </th>
          <th> Adresse </th>
          <th> Code Postal </th>
          <th> Age </th>
        </tr>
      </thead>
      <tbody>
        {personnesJSON.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nom}</td>
            <td>{p.prenom}</td>
            <td>{p.adresse}</td>
            <td>{p.codePostal}</td>
            <td>{p.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PeopleTable;
