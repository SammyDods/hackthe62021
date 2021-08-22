import "./cams.css";

navigator.mediaDevices.enumerateDevices()
.then(devices => {
  var camera = devices.find(device => device.kind == "videoinput");
 if (camera) {
       var constraints = { deviceId: { exact: camera.deviceId } };
    return navigator.mediaDevices.getUserMedia({ video: constraints });
}
})
.then(stream => video.srcObject = stream)
.catch(e => console.error(e));

var video = document.querySelector("#videoElement");
var video2 = document.querySelector("#videoElement2");
var video3 = document.querySelector("#videoElement3");
var video4 = document.querySelector("#videoElement4");

if (navigator.mediaDevices.getUserMedia) {
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
    video.srcObject = stream;
    video2.srcObject = stream;
    video3.srcObject = stream;
    video4.srcObject = stream;
    })
    .catch(function (err0r) {
    console.log("Something went wrong!");
    });
}



function cams(){
	return (
		<>
<div id="videobox">
  
  <video autoplay="true" id="videoElement" style = "position:relative; left:1000px">
  </video>
</div>
<div id="videobox2">

  <video autoplay="true" id="videoElement2" style = "position:relative; left:1000px;">
  </video>
</div>
<div id="videobox3">

  <video autoplay="true" id="videoElement3" style = "position:relative; left:1000px;">
  </video>
</div>
<div id="videobox4">

  <video autoplay="true" id="videoElement4" style = "position:relative; left:1000px;">
  </video>
</div>
		</>
	);
};

export default cams;

