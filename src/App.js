import React, { Component } from "react";
// import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home } from "./Home";
import { linje } from "./linje";
import { linje2 } from "./linje2";
// import { Annuitet } from "./Annuitet";
import { Pris } from "./Pris";
import { Optimering } from "./Optimering";
import { Finans } from "./Finans";
import { video } from "./video";
import { skjult2 } from "./skjult2";
import { skjult3 } from "./skjult3";
import { ligninger } from "./ligninger";
import { optimering2 } from "./optimering2";
import { CD } from "./CD";
import { LP } from "./LP";
import { opg } from "./opg";
import { kalkulation } from "./kalkulation";
import { kalkulation2 } from "./kalkulation2";
import { kalkulation3 } from "./kalkulation3";
import { kalkulation4 } from "./kalkulation4";
import { elasticitet } from "./elasticitet";
import { elasticitet2 } from "./elasticitet2";


// import { f4 } from "./f4";
import { linjer } from "./linjer";
import { NoMatch } from "./NoMatch";
// import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
// import { Jumbotron } from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}
          {/* <Layout> */}
          <Switch>
            <Route exact path="/" component={linje} />
            <Route path="/linje2" component={linje2} />
            <Route path="/ligninger" component={ligninger} />
            <Route path="/finans" component={Finans} />
            <Route path="/pris" component={Pris} />
            <Route path="/optimering" component={Optimering} />
            <Route path="/linjer" component={linjer} />
            <Route path="/kalkulation" component={kalkulation} />
            <Route path="/kalkulation2" component={kalkulation2} />
            <Route path="/kalkulation3" component={kalkulation3} />
            <Route path="/kalkulation4" component={kalkulation4} />
            <Route path="/video" component={video} />
            <Route path="/skjult2" component={skjult2} />
            <Route path="/skjult3" component={skjult3} />
            <Route path="/optimering2" component={optimering2} />
            <Route path="/elasticitet" component={elasticitet} />
            <Route path="/elasticitet2" component={elasticitet2} />
            <Route path="/CD" component={CD} />
            <Route path="/LP" component={LP} />
            <Route path="/opg" component={opg} />
            {/* <Route path="/*" component={Home} /> */}
            <Route path="/*" component={NoMatch} />
          </Switch>
          {/* </Layout> */}
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
