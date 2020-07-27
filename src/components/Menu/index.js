import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt ="WoodyFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Children
            </Button>
        </nav>
    );
}

export default Menu;