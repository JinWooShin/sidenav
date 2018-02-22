import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";

import './index.css';
import Nav from "./components/Nav/Nav";
import registerServiceWorker from './registerServiceWorker';

import Dashboard from "./components/Dashboard";
import Webclock from "./components/Webclock";
import Timecard from "./components/Timecard";
import Schedule from "./components/Schedule";
class App extends React.Component {
    render() {
        return (
            <div className="App">
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/webclock" component={Webclock}/>
                        <Route path="/timecard" component={Timecard}/>
                        <Route path="/schedule" component={Schedule}/>
                    </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
