function preload(){
    
}

function  setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
}

function draw(){
    circle(150,150,60);
    circle(450,150,60);
    rect(275,250,50,100);
    Arc(275,350,180);
}

function take_snapshot(){
    save('student_name.png');
}
