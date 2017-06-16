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

const defaultFilters = ["trump", "donald", "president"];

export default class App extends Component {
	state = {
		collapsed: true, // default state of nav
		filters: defaultFilters // default array of filter words
	};

	toggleCollapse = (action) => {
		this.setState((prevState) => ({
			// if no action toggle collapse state
			collapsed: action === "collapse" ? true : !prevState.collapsed
		}))
	}

	changeFilters = (action, filter) => {
		const filterTerm = filter.toLowerCase();
		this.setState((prevState) => {
			const filters = prevState.filters;
			switch (action) {
				case "add":
					if(!filters.includes(filterTerm)) 
						{filters.push(filterTerm)}
					return {filters: 
						!filters.includes(filterTerm) ? filters.concat([filterTerm]) : filters}
				case "remove":
					return {filters: filters.filter((word) => word !== filterTerm)};
				default:
					return prevState;
			}
		})
	}

	render() {
		const { collapsed, filters } = this.state;

		return (
			<Router>
				<div className="App">
					<TitleBar toggleCollapse={this.toggleCollapse} />
					<div className="container">
						<div className="nav-container">
							<Navigation 
								collapsed={collapsed}
								toggleCollapse={this.toggleCollapse}
								filters={filters}
							/>
						</div>
						<Switch>
							<Route exact path="/" render={() => (
								<Redirect to="/r/all" />
							)}/>
							<Route path="/r/:sub" render={props => (
								<Content 
									filters={filters}
									changeFilters={this.changeFilters}
									{...props}
								/>
							)}/>
							<Route component={InvalidUrl} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
