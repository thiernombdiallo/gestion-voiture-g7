// MesVoitures.js
import React, { Component } from 'react';
import Voiture from './Voiture';

class MesVoitures extends Component {
    constructor(props) {
        super(props);

        // Initialisation du state avec un tableau d'objets représentant des voitures
        this.state = {
            voitures: [
                { marque: 'Toyota', couleur: 'Rouge', annee: 2022 },
                { marque: 'Ford', couleur: 'Bleu', annee: 2020 },
                { marque: 'Honda', couleur: 'Vert', annee: 2021 },
            ],
        };
    }

    render() {
        return (
            <div>
                <h1>Liste des Voitures</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Couleur</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.voitures.map((voiture, index) => (
                            <Voiture key={index} voiture={voiture} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MesVoitures;
