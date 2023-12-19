// // MesVoitures.js 
// import React, { Component } from 'react';
// import Voiture from './Voiture';
// import './MesVoitures.css';
// // import './CalculeAge';
// import { calculerAgeVoiture } from './CalculeAge';
// class MesVoitures extends Component {
//     constructor(props) {
//         super(props);

//         // Initialisation du state avec un tableau d'objets représentant des voitures
//         this.state = {
//             voitures: [
//                 { marque: 'Toyota', couleur: 'Rouge', annee: 2022 ,age:''},
//                 { marque: 'Ford', couleur: '', annee: 2020 , age:''},
//                 { marque: 'Honda', couleur: 'Vert', annee: 2021 , age:''},
//             ],
//         };
//     }
    
//     render() {
//         return (
//             <div className="MesVoitures">
//                 <h1 className=''>Liste des Voitures</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Marque</th>
//                             <th>Couleur</th>
//                             <th>Année</th>
//                             <th>Age</th>
//                             <th>Action</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.voitures.map(({marque, couleur, annee,age}, index) => (
//                             <Voiture key={index} marque={marque}  
//                             couleur={couleur} annee={annee}/>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }

// }

// export default MesVoitures;



import React, { Component } from 'react';
import Voiture from './Voiture';
import './MesVoitures.css';
import { calculerAgeVoiture } from './CalculeAge'; // Importer en utilisant le même nom

class MesVoitures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voitures: [
        { marque: 'Toyota', couleur: 'Rouge', annee: 2022, age: '' },
        { marque: 'Ford', couleur: '', annee: 2020, age: '' },
        { marque: 'Honda', couleur: 'Vert', annee: 2021, age: '' },
      ],
    };
  }

  render() {
    return (
      <div className="MesVoitures">
        <h1 className=''>Liste des Voitures</h1>
        <table>
          <thead>
            <tr>
              <th>Marque</th>
              <th>Couleur</th>
              <th>Année</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.voitures.map(({ marque, couleur, annee }, index) => (
              <Voiture key={index} marque={marque} couleur={couleur} annee={annee} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MesVoitures;
