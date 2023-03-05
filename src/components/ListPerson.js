import axios, { Axios } from 'axios'
import React, { useState } from 'react'

export default function ListPerson() {
    const[personne,setPersonne]=useState([]);

    const afficherListe=()=>{
        axios.get("http://localhost:3001/list")
        .then((response)=>setPersonne(response.data))



    }

  return (
    <div>


    </div>
  )
}
