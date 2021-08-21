import "./Home.css";
import { Link } from "react-router-dom";

var name = ("Enter your name: ");


function Home(){
	return (
		<>
			<div className = "title">SOCIAL DISDANCE</div>
			<input type="text" id="textbox" onkeyup="myFunction()" ></input>
			<button onclick="returnText()">Submit</button>


		</>
	);
};

export default Home;