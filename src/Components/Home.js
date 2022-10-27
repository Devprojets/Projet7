import React, { Component } from "react";
import Banniere from "./Banniere";
import Logements from "./Logement";


export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas,
      info: {
        type: "Banniere-home",
        text:"Chez vous, partout et ailleurs"
      }
    }
  }
  render() {
        return (
            <main>
              <Banniere info={this.state.info} />
              <Logements datas={this.state.datas} />
            </main>
        )
    }
}




