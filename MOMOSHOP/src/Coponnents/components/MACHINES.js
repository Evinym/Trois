import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DBSY from '../PRODUITS/MACHINES/DBSY';
import TAG from '../PRODUITS/MACHINES/TAG';
import TCN from '../PRODUITS/MACHINES/TCN';
import Pieces from '../PRODUITS/MACHINES/PIECES';

class CC extends Component {
    render() {
        return (
            <Router>
                <div>

                    <nav class="nav-extended blue">
                        <div class="nav-content">
                            <ul class="tabs tabs-transparent">
                              <li class="tab"><Link to="/">Débroussailleuse</Link></li>
                              <li class="tab"><Link to="/TAG">Tondeuse à gazon</Link></li>
                            </ul>
                            <ul class="tabs tabs-transparent">
                              <li class="tab"><Link to="/tronconneuse">Tronçonneuse</Link></li>
                              <li class="tab"><Link to="/pieces">Pieces</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={DBSY} />
                    <Route path="/TAG" component={TAG} />
                    <Route path="/tronconneuse" component={TCN} />
                    <Route path="/pieces" component={Pieces} />

                </div>
            </Router>
        );
    }
}

export default CC;
