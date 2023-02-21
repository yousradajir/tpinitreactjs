/**
* <DAJIR Yousra>
* Version 1.0
*/

class Personn {

    

      id = 0;
      nom = '';
      prenom = '';
      adresse ='' ;
      codePostal = '';
      age = 18;
    
}
  
export default Personn;

const personnes = [

  {
    id: 1,
    nom: 'Dolon',
    prenom: 'Pauline',
    adresse: '1 rue de Metz',
    codePostal: '54000',
    age: 24
  },
  {
    id: 2,
    nom: 'Dajir',
    prenom: 'Yousra',
    adresse: '310 avenue berthelot',
    codePostal: '69008',
    age: 23
  },
  {
    id: 3,
    nom: 'Moinier',
    prenom: 'Coralie',
    adresse: '86 rue de la République',
    codePostal: '69003',
    age: 32
  }
];

export let personnesJSON = personnes;

