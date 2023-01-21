import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Rules1 from "./ReactMenu/Rules1";
import Rules2 from "./ReactMenu/Rules2";
import Rules3 from "./ReactMenu/Rules3";
import Rules4 from "./ReactMenu/Rules4";
import Rules5 from "./ReactMenu/Rules5";
import Rules6 from "./ReactMenu/Rules6";
import Rules7 from "./ReactMenu/Rules7";
import Rules8 from "./ReactMenu/Rules8";
import Rules9 from "./ReactMenu/Rules9";
import Rules10 from "./ReactMenu/Rules10";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact from="/" component={Home} />
				<Route exact path="/About" component={About} />
				<Route exact path="/Service" component={Service} />
				<Route exact path="/Paperpresentation" component={Rules1} />
				<Route exact path="/innovativedesign" component={Rules2} />
				<Route exact path="/itquiz" component={Rules3} />
				<Route exact path="/Reversecoding" component={Rules4} />
				<Route exact path="/Word chase" component={Rules5} />
				<Route exact path="/SkribbleWord" component={Rules6} />
				<Route exact path="/Langaming" component={Rules7} />
				<Route exact path="/Tech.talk" component={Rules8} />
				<Route exact path="/Codeconvert" component={Rules9} />
				<Route exact path="/Codedective" component={Rules10} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
