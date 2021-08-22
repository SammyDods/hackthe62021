import "./play.css";
import vid1 from "./p1.mp4";
import vid2 from "./p2.mp4";
import game from "./game.mp4";
import VideoPlayer from "react-video-js-player";

function two(){
	return (
		<>
			<div className = "players-block">
				<div className = "dance-video">
					<VideoPlayer src = {game} width="1400" height="790"/>
				</div>

				<div className = "players">
                    <div className = "player1">
						<VideoPlayer src = {vid1} width="370" height="210"/>
						<h1>DANCER 1</h1>
					</div>

					<div className = "player2">
						<VideoPlayer src = {vid2} width="370" height="210"/>
						<h1>DANCER 2</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default two;