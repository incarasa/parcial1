import React from 'react';
import headerImage from './header.png';
import './Header.css';
import {FormattedMessage} from 'react-intl';



function Header() {
    return (
        <div className='header-div'>
            <h1><FormattedMessage id="Title"/></h1>
            <img src={headerImage} alt="Header" className='header-image'/>
        </div>
    );
};

export default Header;