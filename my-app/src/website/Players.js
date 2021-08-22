import "./Players.css";
import { Link } from "react-router-dom";

function Players(){
	return (
		<>	
			<div className = "player-header">
				<div className = "players">HOW MANY DANCERS ARE HIP HOPPING?</div>
				<div className = "buttons">
					<h1 className = "two">2 DANCERS</h1>
					<h1 className = "three">3 DANCERS</h1>
				<	h1 className = "four">4 DANCERS</h1>
				</div>
			</div>


		</>
	);
};

export default Players;