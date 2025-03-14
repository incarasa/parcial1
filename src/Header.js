import React from 'react';
import headerImage from './header.png';
import './Header.css';



function Header() {
    return (
        <div className='header-div'>
            <h1>Adopta un Robot con RobotLovers</h1>
            <img src={headerImage} alt="Header" className='header-image'/>
        </div>
    );
};

export default Header;