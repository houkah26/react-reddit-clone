import React, { Component } from 'react';
import { 
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import InvalidUrl from '../components/InvalidUrl';
import Navigation from '../containers/Navigation';
import Content from '../containers/Content';

import './App.css';

export default class App extends Component {
  state = {
    collapsed: true, //state of nav
  };

  toggleCollapse = (action) => {
    const collapsed = action === "collapse" ? true : !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Router>
        <div className="App">
          <TitleBar toggleCollapse={this.toggleCollapse} />
          <div className="container">
            <div className="nav-container">
              <Navigation 
                collapsed={collapsed}
                toggleCollapse={this.toggleCollapse}
              />
            </div>
						<Switch>
							<Route exact path="/" render={() => (
								<Redirect to="/r/all" />
							)}/>
							<Route path="/r/:sub" component={Content} />
							<Route component={InvalidUrl} />
						</Switch>
          </div>
        </div>
      </Router>
    );
  }
}
