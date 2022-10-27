import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logements extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas
    }
  }
    render() {  
        return (      
            <section className='home__cards'>
                {this.state.datas.map(el => {
                    return (
                        <Link to={`/logements/${el.id}`} key={el.id}>
                            <article className='home__cards__thumb'>
                                <div className="home__cards__thumb__overlay">  <img src={el.cover} alt={el.titre}  /></div>
                              
                                <p className='home__cards__thumb__titre'>{el.titre}</p>
                            </article>
                        </Link>
                         )
                })}
            </section>
        )
    }
}