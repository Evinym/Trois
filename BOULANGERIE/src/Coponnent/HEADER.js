import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../logo.svg';
import Accueil from '../components/AA';
import Vehicules from '../components/DD';
import Machines from '../components/CC';
import Outils from '../components/BB';

class HEADER extends Component {
    render() {
        return (
                <div>
                    <Router>
                        <div>
                            <header>
                                <nav class="nav-extended blue">
                                    <div class="nav-wrapper">
                                        <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
                                    </div>
                                    <div class="nav-content">
                                        <ul class="tabs tabs-transparent">                          
                                          <li class="tab"><Link to="/">Accueil</Link></li>
                                          <li class="tab"><Link to="/vehicules">Vehicules</Link></li>
                                          <li class="tab"><Link to="/machines">Machines</Link></li>
                                          <li class="tab"><Link to="/outils">Outils</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </header>
                            <Route exact path="/" component={Accueil} />
                            <Route path="/vehicules" component={Vehicules} />
                            <Route path="/machines" component={Machines} />
                            <Route path="/outils" component={Outils} />
                        </div>
                    </Router>
                </div>    
        );
    }
}

export default HEADER;