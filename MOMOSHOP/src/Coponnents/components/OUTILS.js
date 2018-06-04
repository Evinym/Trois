import React, { Component } from 'react';

import BAO from '../PRODUITS/OUTILS/BAO';
import CAM from '../PRODUITS/OUTILS/CAM';
import CAP from '../PRODUITS/OUTILS/CAP';
import CP from '../PRODUITS/OUTILS/CP';
import PINCES from '../PRODUITS/OUTILS/PINCES';

class BB extends Component {
    render() {
        return (
            <div>
                <BAO />
                <CAM />
                <CAP />
                <CP />
                <PINCES />
            </div>
        );
    }
}

export default BB;