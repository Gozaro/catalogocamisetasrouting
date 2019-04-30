import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <Link to={'/dev/build/CatalogoCamisetas/'}>
                 <h1>THE FRONTEND <br />T-CODE-SHIRT SHOP</h1>
            </Link>
        </header>


    )
}

export default Header;