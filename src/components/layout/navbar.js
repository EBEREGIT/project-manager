import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    EberePlentyApp
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default NavBar;