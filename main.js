HarryPotterSong="";
PeterSong="";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){
    PeterSong = loadSound("peter.mp3");
    HarryPotterSong = loadSound("harry.mp3");
}

function setup(){
    canvas = createCanvas(700,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function draw(){
    image(video,0,0,700,500);
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
         
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWristX+" leftWrist_y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWristX+" rightWrist_y = "+rightWristY);
    }
}