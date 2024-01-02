video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}    

function setup() {
  canvas = createCanvas(450, 350);
  canvas.center();
}

function draw() {
    Image(video, 0, 0, 480, 380);
}

function start()
{
  objectDetector = ml5.objectDectector('cocossd', modelLoaded);
  document.getElementsById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}