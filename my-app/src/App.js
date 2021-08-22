import Home from "./website/Home";
import Players from "./website/Players";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
          <Route path="/" exact component={Home} />
					<Route path="/Players" exact component={Players} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
