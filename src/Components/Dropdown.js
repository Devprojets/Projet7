import React, { Component } from "react";

export default class Dropdown extends Component {
    constructor(props) {
    super(props);
    this.state = {
        openDrawer: false,
        text: this.props.text,
        class: this.props.class,
    }
    };

    openMenu = () => {
        this.state.openDrawerOne ? this.setState({ openDrawerOne: false }) : this.setState({ openDrawerOne: true });
    }

    
    render() {
        return (
            
            <article className={this.state.class}>
                <div className={`${this.state.class}__header`} onClick={this.openMenu}>
                    <h4>{this.state.text.titre}</h4>
                    {this.state.openDrawerOne ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.openDrawerOne ? `${this.state.class}__body--open` : `${this.state.class}__body`}>
                    <p className={this.state.openDrawerOne ? `${this.state.class}__text--open` : `${this.state.class}__text`}>
                        {this.state.text.body}
                    </p>
                </div>
            </article>
            
        )
    }
}