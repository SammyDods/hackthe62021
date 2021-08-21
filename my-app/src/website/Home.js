import "./Home.css";
import { Link } from "react-router-dom";
import title from "./title.png";

var name = ("Enter your name: ");


function Home(){
	return (
		<>
			<div className = "title-screen">
				<img className="title" src={title}/>
				<div className = "start-button">
					<h1 className = "button">START</h1>
				</div>
			</div>




		</>
	);
};

export default Home;