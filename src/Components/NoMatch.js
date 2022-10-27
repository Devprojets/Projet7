import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NoMatch extends Component {
    render() {
        return (
            <section className="page-not-found">
                <div className="page-not-found__content">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/">Retourner sur la page d'accueil</NavLink>
                </div>
            </section>
            

        )
    }
}