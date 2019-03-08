import React from 'react'
import Image from '../assets/RMMLogo.png'

function Footer() {
    return (
        <footer className="page-footer black darken-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <img src={Image} style={{height:100}}/>
                        <p className="#d50000 red-text">Creativity Powered</p>
                    </div>

                    <div className="col l3 s12">
                        <h5 className="#d50000 red-text">Connect</h5>
                        <ul>
                            <li><a className="#d50000 red-text" href="#!">Link 1</a></li>
                            <li><a className="#d50000 red-text" href="#!">Link 2</a></li>
                            <li><a className="#d50000 red-text" href="#!">Link 3</a></li>
                            <li><a className="#d50000 red-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;