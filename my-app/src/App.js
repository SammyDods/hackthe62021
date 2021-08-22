import Home from "./website/Home";
import Players from "./website/Players";
import two from "./website/two";
import three from "./website/three";
import four from "./website/four";
import score from "./website/score";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
          <Route path="/" exact component={Home} />
					<Route path="/Players" exact component={Players} />
					<Route path="/2players" exact component={two} />
					<Route path="/3players" exact component={three} />
					<Route path="/4players" exact component={four} />
					<Route path="/scoreboard" exact component={score} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
