import "./Players.css";
import { Link } from "react-router-dom";

function Players(){
	return (
		<>	
			<div className = "player-header">
				<div className = "player-text">HOW MANY DANCERS ARE HIP HOPPING?</div>
				<div className = "buttons">
					<Link className="two" to="/2players">
						<h1>2 DANCERS</h1>
					</Link>
					<Link className="three" to="/3players">
						<h1>3 DANCERS</h1>
					</Link>
					<Link className="four" to="/4players">
						<h1>4 DANCERS</h1>
					</Link>
				</div>
			</div>


		</>
	);
};

export default Players;