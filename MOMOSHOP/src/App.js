import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HEADER from './Coponnents/HEADER';
import FOOTER from './Coponnents/FOOTER';


const Momo = () => (
                    <div>
                      <HEADER />
                      <FOOTER />
                    </div>
              );

export default Momo;