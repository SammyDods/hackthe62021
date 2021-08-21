import Home from "./website/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
                    <Route path="/" exact component={Home} />
					<Route path="/Themes" exact component={Themes} />

					<Route path="/Elegant" exact component={Elegant}/>              
                </Switch>
            </Router>
        </>
);
};

export default App;