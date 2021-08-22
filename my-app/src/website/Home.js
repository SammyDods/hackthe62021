import "./Home.css";
import { Link } from "react-router-dom";
import title from "./title.png";


function Home(){
	return (
		<>
			<div className = "title-screen">
				<div className = "start-button">
					<Link className="Players" to="/Players">
						<h1 className = "button">START</h1>
					</Link>
				</div>
			</div>




		</>
	);
};

export default Home;