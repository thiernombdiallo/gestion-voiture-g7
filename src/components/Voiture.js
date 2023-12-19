// // export default Voiture;

// import React, { useState } from 'react';
// import { calculerAgeVoiture } from './CalculeAge';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Voiture = ({ marque, couleur, annee }) => {
//   const [afficherAge, setAfficherAge] = useState(false);
//   const age = calculerAgeVoiture(annee);

//   const maCouleur = couleur === '' ? 'Neant' : couleur;

//   return (
//     <tr>
//       <td>{marque}</td>
//       <td>{maCouleur}</td>
//       <td>{annee}</td>
//       <td>
//         <button onClick={() => setAfficherAge(!afficherAge)}>
//           {afficherAge ? <FaEye/> : <FaEyeSlash  />}
//         </button>
//         {afficherAge && <span>{age}</span>}
//       </td>
//     </tr>
//   );
// };

// export default Voiture;
import React, { useState } from 'react';
import { calculerAgeVoiture } from './CalculeAge';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Voiture = ({ marque, couleur, annee }) => {
  const [afficherAge, setAfficherAge] = useState(false);
  const age = calculerAgeVoiture(annee);

  const maCouleur = couleur === '' ? 'Neant' : couleur;

  return (
    <tr> 
      <td>{marque}</td>
      <td>{maCouleur}</td>
      <td>{annee}</td>
      <td style={{ color: afficherAge ? 'black' : 'gray' }}>
        {afficherAge ? age : 'Âge masqué'}
      </td>
      <td>
        <button onClick={() => setAfficherAge(!afficherAge)}>
          {afficherAge ? <FaEyeSlash /> : <FaEye />}
        </button>
      </td>
    </tr>
  );
};

export default Voiture;
