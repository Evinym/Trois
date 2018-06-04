import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Scooter from './AA';
import Casques from './CC';
import Motos from './BB';
import Pieces from './DD';

class DD extends Component {
    render() {
        return (
                <Router>
                    <div>
                        <ul>
                          <li>
                            <Link to="/">Scooter</Link>
                          </li>
                          <li>
                            <Link to="/casques">Casques</Link>
                          </li>
                          <li>
                            <Link to="/motos">Motos</Link>
                          </li>
                          <li>
                            <Link to="/pieces">Pieces</Link>
                          </li>
                        </ul>
                        <hr />
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
