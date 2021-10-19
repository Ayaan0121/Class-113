function setup() {
    canvas=createCanvas(600 , 450);

    canvas.position(100 , 250);

    video = createCapture(VIDEO);

    video.hide();

    colour="";
}

function draw() {
    image(video , 0 , 0 , 600 , 450);

    tint(colour);
}

function filter_tint() {
    
    colour=document.getElementById("color_name").value;
}

function take_snapshot() {
    save('filter.png');
}