import "./Home.css";
import { Link } from "react-router-dom";
import title from "./title.png";


function Home(){
	return (
		<>
			<div className = "title-screen">
				<div className = "start-button">
					<Link className="button" to="/Players">
						<h1>START</h1>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;