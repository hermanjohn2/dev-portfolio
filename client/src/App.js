import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Navigation from './components/Navigation';

const App = () => {
	// Helper function that will assist in creating a delay for a text effect on a few components
	const wait = ms => {
		return new Promise(resolve => setTimeout(resolve, ms));
	};

	// Using the render property in my Route allows me to pass down the wait function as a prop so it can be used in multiple components
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route
					exact
					path={['/', '/home']}
					render={props => <Home {...props} wait={wait} />}
				/>
				<Route exact path="/contact" component={Contact} />
				<Route
					exact
					path="/projects"
					render={props => <Projects {...props} wait={wait} />}
				/>
				<Route exact path="/about" component={AboutMe} />
			</Switch>
		</Router>
	);
};

export default App;
