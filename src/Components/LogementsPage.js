import React, { Component } from "react";
import { withRouter } from "react-router";
import NoMatch from "./NoMatch";
import Gallery from "./Gallery";
import Tag from "./Tag";
import Rating from "./Rating";
import Dropdown from "./Dropdown";
//utilisation d'etat//
class LogementsPage extends Component {
    constructor(props) {
    super(props);
        this.state = {
            datas: this.props.datas,
            singleLogements: this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.logementId),
            allId: this.props.datas.map(elemnt => elemnt.id),
            textOne: {
                titre: "Description",
                body: (this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.logementId)).map(elmnt => elmnt.description),
            },

            textTwo: {
                titre: "Equipements",
                body: (this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.logementId)).map((el => el.equipments.map((el, index) => {
                        return <li className="equipments__list-item" key={index}>{el}</li>
                    }))),
            },
            class: "dropdown-accom-page",
        }
    
    };
    
    render() {
        if (!this.state.allId.some((ele) => ele === this.props.match.params.logementId)) return <NoMatch />;

        return (
            <>
              {this.state.singleLogements.map(el => {
                  return (
                    <main key={el.id}>
                        <Gallery datas={this.state.singleLogements} />
                        <section className="Logements-info">
                            <div className="Logements-info__left-side">
                                <h1 className="Logements-info__left-side__titre">{el.titre}</h1>
                                <p className="Logements-info__left-side__location">{el.location}</p>
                                <Tag datas={this.state.singleLogements} />
                            </div>
                              <div className="Logements-info__right-side">
                                <div className="Logements-info__right-side__host-info">
                                    <div className="Logements-info__right-side__host">
                                        <p className="Logements-info__right-side__host__firstname">{el.host.name.split(' ', 1)}</p>
                                        <p className="Logements-info__right-side__host__lastname">{el.host.name.split(' ').pop()}</p>
                                    </div>
                                    <img src={el.host.picture} alt="Hôte" />
                                </div>
                                <Rating datas={this.state.singleLogements} />
                            </div> 
                          </section>
                          <section className="general-info">
                              <Dropdown text={this.state.textOne} class={this.state.class} />
                              <Dropdown text={this.state.textTwo} class={this.state.class}/>
                          </section>
                          
                    </main>
                         )
                })}
            </>
        )
    };
    
};

export default withRouter(LogementsPage);