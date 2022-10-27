import React, { Component } from "react";


export default class Footer extends Component {
    
    render() {
        return (
            <footer className='footer'>
                <div className='footer__logo'>
                    <img src={`${process.env.PUBLIC_URL}/logo-white.png`} alt="Logo" />
                </div>
                <p>&#169; {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>        
        )
    }
}