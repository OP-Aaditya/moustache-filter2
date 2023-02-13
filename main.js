function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPoses);
}
function modeloaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        console.log('upperlip x - '+ results[0].pose.upperlip.x);
        console.log('upperlip y - ' +results[0].pose.upperlip.y);
    }
}

function draw(){
    image(video,0,0,300,300)
}
function take_snapshot(){
    save('myfilterpicture');
}