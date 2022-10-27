import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Apropos from "./Components/Apropos";
import NoMatch from "./Components/NoMatch";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LogementsPage from "./Components/LogementsPage";

export default function Routes({datas}) {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home datas={datas} />
          </Route>
          <Route path="/a-propos">
            <Apropos />
          </Route>
          <Route path="/logements/:logementId">
            <LogementsPage datas={datas} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
          <Route path="/404">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
