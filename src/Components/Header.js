import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Header extends Component {
    
    render() {
        return (
            <header className='header'>
                <div className='header__logo'>
                    <img src={`${process.env.PUBLIC_URL}/LOGO.png`} alt="Logo" />
                </div>
                <div className='header__links'>
                    <NavLink exact activeClassName='active' to="/">Accueil</NavLink>
                    <NavLink activeClassName='active' to="/a-propos">A Propos</NavLink>
                </div>
            </header>        
        )
    }
}