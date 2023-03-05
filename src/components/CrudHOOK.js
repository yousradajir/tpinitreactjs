import React, { useState, useEffect } from 'react';

function CrudHOOK() {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [age, setAge] = useState('');
  const [people, setPeople] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [updateIndex, setUpdateIndex] = useState(-1); // La variable updateIndex est définie ici

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem('people'));
    if (storedPeople) {
      setPeople(storedPeople);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const handleIdChange = event => setId(event.target.value);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleAddressChange = event => setAddress(event.target.value);
  const handlePostalCodeChange = event => setPostalCode(event.target.value);
  const handleAgeChange = event => setAge(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (editIndex === -1) {
      const newPerson = { id, firstName, lastName, address, postalCode, age };
      setPeople([...people, newPerson]);
    } else {
      const updatedPeople = [...people];
      updatedPeople[editIndex] = { id, firstName, lastName, address, postalCode, age };
      setPeople(updatedPeople);
      setEditIndex(-1);
    }
    setId('');
    setFirstName('');
    setLastName('');
    setAddress('');
    setPostalCode('');
    setAge('');
  };

  const handleEdit = index => {
    const personToEdit = people[index];
    setId(personToEdit.id);
    setFirstName(personToEdit.firstName);
    setLastName(personToEdit.lastName);
    setAddress(personToEdit.address);
    setPostalCode(personToEdit.postalCode);
    setAge(personToEdit.age);
    setEditIndex(index);
  };

  const handleDelete = index => {
    const updatedPeople = [...people];
    updatedPeople.splice(index, 1);
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h1>Ajouter une personne</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" value={id} onChange={handleIdChange} />
        <label htmlFor="firstName">Nom:</label>
        <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        <label htmlFor="lastName">Prenom:</label>
        <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        <label htmlFor="address">Adresse:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} />
        <label htmlFor="postalCode">Code Postal:</label>
        <input type="text" id="postalCode" value={postalCode} onChange={handlePostalCodeChange} />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
        <button className="add" type="submit">{updateIndex === -1 ? 'Ajouter' : 'Modifier'}</button>
      </form>
      <h1>Tableau des personnes</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Adresse</th>
            <th>Code postal</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.address}</td>
              <td>{person.postalCode}</td>
              <td>{person.age}</td>
              <td>
                <button className="edit" type="button" onClick={() => handleEdit(index)}>
                  Modifier
                </button>
                <button className="delete" type="button" onClick={() => handleDelete(index)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

  
export default CrudHOOK;