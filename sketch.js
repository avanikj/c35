var test_ball;
var database;
var position;

function setup(){
    database = firebase.database()

    createCanvas(500,500);

    test_ball = createSprite(250,250,10,10);
    test_ball.shapeColor = "red";

    var test_ballpos = database.ref("position")
    test_ballpos.on("value",readPosition)
}

function draw(){
    background("yellow");
    if(position != undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    }
    
}

function writePosition(x,y){
    database.ref("position").set({
        "x" : position.x + x,
        "y" : position.y + y
    })
   
}
function readPosition(data){
position = data.val()
test_ball.x =position.x;
test_ball.y = position.y;
}

