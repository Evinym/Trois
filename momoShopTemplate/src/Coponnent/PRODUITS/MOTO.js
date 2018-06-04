import React, { Component } from 'react';
import motos from '../DATAPROD/MOTO';


class MOTOS extends Component {
    render() {
        return (
            <div>
                <ul>
                    {motos.map((el, i)=>{
                        return(
                            <li key={i} className="theCard">
                                <p>{el.titre}</p>
                                <p>{el.images}</p>
                                <p>{el.marque}</p>
                                <p>{el.description}</p>
                                <p>{el.prix} €</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default MOTOS;