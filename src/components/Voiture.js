// Voiture.js
import React from 'react';

const Voiture = ({ voiture }) => {
    return (
        <tr>
            <td>{voiture.marque}</td>
            <td>{voiture.couleur}</td>
            <td>{voiture.annee}</td>
        </tr>
    );
};

export default Voiture;