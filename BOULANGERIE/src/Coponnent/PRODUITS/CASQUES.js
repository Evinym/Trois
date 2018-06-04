import React, { Component } from 'react';
import casques from '../DATAPROD/CASQUES';


class CARD extends Component {
    render() {
        return (
            <div>
                <ul className="theCardC">
                    {casques.map((el, i)=>{
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

export default CARD;