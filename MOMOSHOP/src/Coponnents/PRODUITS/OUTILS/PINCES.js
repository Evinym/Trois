import React, { Component } from 'react';
import PCS from '../../DATAPROD/PINCES';

class PINCES extends Component {
    render() {
        return (
            <div>
                <div class="nav-extended blue">
                    <h4>Pinces</h4>
                </div>
                <ul className="theCardC">
                    {PCS.map((el, i)=>{
                        return(
                            <li key={i} className="theCard">
                                <h5 className="objectsC1">{el.titre}</h5>
                                <div className="objectsC2"><img className="objectsCI" src={el.images} alt="scooter 2 temps"/></div>                                
                                <h5 className="objectsC1">{el.marque}</h5>
                                <div className="objectsC3">{el.description}</div>
                                <h6 className="objectsC1">{el.prix} €</h6>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default PINCES;