var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
//player 1
var x = canvas.width/2 - 50 ;
var y = canvas.height-250;
var dx = 0;
var dy = 0;
//player 2
var x2 = canvas.width/2 + 50 ;
var y2 = canvas.height-250;
var dx2 = 0;
var dy2 = 0;

document.addEventListener("keypress",function(e){
  // console.log("something was pressed")
  console.log(e.key)
  const pressKey = e.key

  switch(pressKey){
    //player 1 listener
    case 'w':
      console.log("moving up")
      dx = 0
      dy += -0.5
      break;

    case 's':
      console.log("moving down")
      dx = 0
      dy += 0.5
      break;

    case 'a':
      console.log("moving left")
      dx += -0.5
      dy = 0
      break;

    case 'd':
      console.log("moving right")
      dx += 0.5
      dy = 0
      break;

    case ' ':
      console.log("STOP")
      dx = 0
      dy = 0
      break;
    // player 1 listener end

    //player 2 listener
    case 'i':
      console.log("moving up")
      console.log (dx2)
      dx2 = 0
      dy2 += -0.5
      break;

    case 'k':
      console.log("moving down")
      dx2 = 0
      dy2 += 0.5
      break;

    case 'j':
      console.log("moving left")
      dx2 += -0.5
      dy2 = 0
      break;

    case 'l':
      console.log("moving right")
      dx2 += 0.5
      dy2 = 0
      break;

      case ',':
        console.log("STOP")
        dx2 = 0
        dy2 = 0
        break;
      //player 2 listener end
  }

})

function player1() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function player2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#9995DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player1();
    player2();
    //allows player 1 to bounce off walls
    if(x + dx > (canvas.width-ballRadius) || x + dx < ballRadius) {
        dx = -dx ;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    //player 1
    x += dx;
    y += dy;

    //allows player 2 to bounce off walls
    if(x2 + dx2 > (canvas.width-ballRadius) || x2 + dx2 < ballRadius) {
        dx2 = -dx2 ;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }
    // to adjust speed?
    // if(x2 > 240){
    //   dx2 = dx2 * 1.01
    //   dy2 = dy2 * 1.01
    //   console.log("hyper speed")

    // need distance method between the two players

    //new location of players
    x2 += dx2;
    y2 += dy2;


}

function distance(player1,player2){
distance = Math.sqrt()
}

setInterval(draw, .5);
