import React, { Component } from 'react';

class AA extends Component {
    render() {
        return (
                <div className="BoxContainer" >
                    <div className="container-contact">
                        <div className="Contact">
                            <div className="TextLorem">
                                <h2 className="legendContactC">Renseignements</h2>
                                <br /><p><i className="fa fa-home" aria-hidden="true"></i><b className="StylePol"> Adresse : </b>La Maison des Artistes,<br /> Chez MOMO Rue st Renault la Havane <br />BP 18 97112 Grand-Bourg</p>
                                <br /><p><i className="fa fa-envelope" aria-hidden="true"></i><b className="StylePol"> Email :</b> momoshopg@gmail.com</p>
                                <br /><p><i className="fa fa-phone" aria-hidden="true"></i><b className="StylePol" > N° de téléphone :</b> 0690.815.981.018</p>                
                            </div>
                        </div>
                        <div className="ContainerMap">
                            <h2 className="legendContactC" id="legendContact">Carte</h2>
                            <div className="div-iframe-contact">
                                <iframe className="Mapping" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1918.7437939035453!2d-61.31750385223566!3d15.883506529133909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6b54d91a6bc2db%3A0x5aaa30289294a5e3!2sS%C3%A9curitest+-+Technik+auto+controle!5e0!3m2!1sfr!2sgp!4v1526315188022" ></iframe>
                            </div>
                        </div>
                    </div>
                </div >
        );
    }
}

export default AA;