import "./Home.css";
import { Link } from "react-router-dom";
import title from "./title.png";


function Home(){
	return (
		<>
			<div className = "title-screen">
				<img className="title" src={title}/>
				<div className = "start-button">
					<Link className="cams" to="/cams">
						<h1 className = "button">START</h1>
					</Link>
				</div>
			</div>




		</>
	);
};

export default Home;