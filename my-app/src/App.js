import Home from "./website/Home";
import About from "./website/About";
import cams from "./website/cams";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
          <Route path="/" exact component={Home} />
					<Route path="/About" exact component={About} />
					<Route path="/cams" exact component={cams} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
