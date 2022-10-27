import React, { Component } from "react";
import RouteConfig from "./routes";
import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      isLoading: false,
      error: null,
    }
  }
//on fecth avant la premiere page home sois affichée//
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${process.env.PUBLIC_URL}/logements.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
        })
//on met le tableau du résultat du json dans Data//
      .then(data => this.setState({ datas: data, isLoading: false }))
 
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    
    if (this.state.error) {
      console.log(this.state.error);
      return <p>{this.state.error.message}</p>;
    }
 
    if (this.state.isLoading) {
      return <p className="loading">Loading ...</p>;
    }

    //permet de donner les datas au ROUTES//
    return (
      <RouteConfig datas={this.state.datas}/>
    )
      
    
  }
}







