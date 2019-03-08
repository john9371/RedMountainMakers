import React from 'react'


function Footer() {
    return (
        <footer className="page-footer #d50000 red accent-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="black-text text-darken-2">More Stuff</h5>
                        <p className="black-text text-darken-2">blah blah blah</p>
                    </div>

                    <div className="col l3 s12">
                        <h5 className="black-text text-darken-2">Connect</h5>
                        <ul>
                            <li><a className="black-text text-darken-2" href="#!">Link 1</a></li>
                            <li><a className="black-text text-darken-2" href="#!">Link 2</a></li>
                            <li><a className="black-text text-darken-2" href="#!">Link 3</a></li>
                            <li><a className="black-text text-darken-2" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;