import React, { Component } from 'react';
import outils from '../DATAPROD/OUTILS';


class OUTILS extends Component {
    render() {
        return (
            <div>
                <ul>
                    {outils.map((el, i)=>{
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

export default OUTILS;