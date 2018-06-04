import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Scooter from '../PRODUITS/VEHICULES/SCOOTER';
import Casques from '../PRODUITS/VEHICULES/CASQUES';
import Motos from '../PRODUITS/VEHICULES/MOTOS';
import Pieces from '../PRODUITS/VEHICULES/PIECES';

class DD extends Component {
    render() {
        return (
                <Router>
                    <div>

                        <nav class="nav-extended blue">
                            <div class="nav-content">
                                <ul class="tabs tabs-transparent">
                                  <li class="tab"><Link to="/">Scooter</Link></li>
                                  <li class="tab"><Link to="/casques">Casques</Link></li>
                                  <li class="tab"><Link to="/motos">Motos</Link></li>
                                  <li class="tab"><Link to="/pieces">Pieces</Link></li>
                                </ul>
                            </div>
                        </nav>
                        <Route exact path="/" component={Scooter} />
                        <Route path="/casques" component={Casques} />
                        <Route path="/motos" component={Motos} />
                        <Route path="/pieces" component={Pieces} />
                        
                    </div>
                </Router>
        );
    }
}

export default DD;
