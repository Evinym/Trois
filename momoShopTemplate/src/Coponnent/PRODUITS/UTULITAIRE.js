import React, { Component } from 'react';
import utulitaire from '../DATAPROD/UTULITAIRE';


class UTULITAIRES extends Component {
    render() {
        return (
            <div>
                <ul>
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

export default UTULITAIRES;