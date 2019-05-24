var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
//player 1
var x = canvas.width/2 - 50 ;
var y = canvas.height + 280;
var dx = 0;
var dy = 0;
//player 2
var x2 = canvas.width/2 + 50 ;
var y2 = canvas.height-250;
var dx2 = 0;
var dy2 = 0;

const distance = function(){
  return Math.sqrt((x-x2)**2 +(y-y2)**2)
}

document.addEventListener("keypress",function(e){
  // console.log("something was pressed")
  // console.log(e.key)
  const pressKey = e.key

  switch(pressKey){
    //player 1 listener
    case 'w':
      console.log("moving up")
      dy = -2
      break;

    case 's':
      console.log("moving down")
      dy = 2
      break;

    case 'a':
      console.log("moving left")
      dx = -2
      break;

    case 'd':
      console.log("moving right")
      dx = 2
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
      dy2 = -2
      break;

    case 'k':
      console.log("moving down")
      dy2 = 2
      break;

    case 'j':
      console.log("moving left")
      dx2 = -2
      break;

    case 'l':
      console.log("moving right")
      dx2 = 2
      break;

      case ',':
        console.log("STOP")
        dx2 = 0
        dy2 = 0
        break;
      //player 2 listener end
  }//switch end

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


    //allows player 2 to bounce off walls
    if(x2 + dx2 > (canvas.width-ballRadius) || x2 + dx2 < ballRadius) {
        dx2 = -dx2 ;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }
    // need distance method between the two players
    if(distance() <= 2*ballRadius){
      // debugger
      const olddx = dx
      const olddy = dy
      dx = -dx;
      dy = -dy;
      dx2 = -dx2
      dy2 = -dy2
      // debugger
      //new location of player 1
      x += dx;
      y += dy;
      //new location of player 2
      x2 += dx2;
      y2 += dy2;

    }else{
      //new location of player 1
      x += dx;
      y += dy;
      //new location of player 2
      x2 += dx2;
      y2 += dy2;
    }
    // debugger

    // console.log(distance(x))

}

setInterval(draw, 10);
