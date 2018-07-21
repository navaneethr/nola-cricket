import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../components/Home";
import Team from "../components/Team";
import Join from "../components/Join";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/team" component={Team}/>
                    <Route exact path="/join" component={Join}/>
                    <Route exact path="/partners" component={Partners}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default Routes;