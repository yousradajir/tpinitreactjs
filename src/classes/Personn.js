/**
* <DAJIR Yousra>
* Version 1.0
*/

class Personn {
    constructor() {
      this.id = 0;
      this.nom = '';
      this.prenom = '';
      this.adresse = '';
      this.codePostal = '';
      this.age = 18;
    }
  }
  
  export default Personn;

const personnes = [
  new Personn({
    id: 1,
    nom: 'Dolon',
    prenom: 'Pauline',
    adresse: '1 rue de Metz',
    codePostal: '54000',
    age: 24
  }),
  new Personn({
    id: 2,
    nom: 'Dajir',
    prenom: 'Yousra',
    adresse: '310 avenue berthelot',
    codePostal: '69008',
    age: 23
  }),
  new Personn({
    id: 3,
    nom: 'Moinier',
    prenom: 'Coralie',
    adresse: '86 rue de la République',
    codePostal: '69003',
    age: 32
  })
];

export const personnesJSON = JSON.stringify(personnes);

