import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from './routes';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						{ routes.map( ( route, index ) => (
							<Route key={index} {...route} />
						) ) }
						<Route render={() => <p>Not Found</p>}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;
