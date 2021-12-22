lx = ""
ly = ""
rx = ""
ry = ""




function preload(){
    song1= loadSound("1.mp3");
    song2=loadSound("2.mp3");
}

function setup(){
canvas =  createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        lx = results[0].pose.leftWrist.x
        ly = results[0].pose.leftWrist.y
        rx = results[0].pose.rightWrist.x
        ry = results[0].pose.rightWrist.y
        console.log(lx + " " + ly + " " + rx + " " + ry)
    }
    }


function draw(){
image(video, 0, 0, 500, 500);
}