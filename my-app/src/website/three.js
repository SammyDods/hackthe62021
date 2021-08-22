import "./play.css";
import vid1 from "./vids/p1.mp4";
import vid2 from "./vids/p2.mp4";
import vid3 from "./vids/p3.mp4";
import game from "./vids/game.mp4";
import VideoPlayer from "react-video-js-player";
import d1 from "./pics/d1.png";
import d2 from "./pics/d2.png";
import d3 from "./pics/d3.png";

function three(){
	return (
		<>
			<div className = "players-block">
				<div className = "dance-video">
					<VideoPlayer src = {game} width="1400" height="800"/>
				</div>

				<div className = "players">
                    <div className = "player1">
						<VideoPlayer src = {vid1} width="340" height="190"/>
					</div>
						<img className="dancer" src={d1}/>

					<div className = "player2">
						<VideoPlayer src = {vid2} width="340" height="190"/>
					</div>
						<img className="dancer" src={d2}/>

                    <div className = "player3">
						<VideoPlayer src = {vid3} width="340" height="190"/>
					</div>
						<img className="dancer" src={d3}/>
				</div>
			</div>
		</>
	);
};

export default three;