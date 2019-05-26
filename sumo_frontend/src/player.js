var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
//player 1
var x1 = canvas.width/2 - 50 ;
var y1 = canvas.height-250;
var dx1 = 0;
var dy1 = 0;
var acc1 = .99
//player 2
var x2 = canvas.width/2 + 50 ;
var y2 = canvas.height-250;
var dx2 = 0;
var dy2 = 0;
var acc2 = .99

var x3 = canvas.width/2 ;
var y3 = canvas.height/2 ;
var circRad = 300

var player1Points = 0
var player2Points = 0


const distance = function(x1, x2,y1, y2){
  return Math.sqrt((x1-x2)**2 +(y1-y2)**2)
}

  function player1() {
      ctx.beginPath();
      ctx.arc(x1, y1, ballRadius, 0, Math.PI*2);
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

  function deathCircle() {
    ctx.beginPath();
    ctx.arc(x3, y3, circRad, 0, Math.PI *2);
    ctx.stroke();
    ctx.closePath();
  }

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player1();
    player2();
    deathCircle();
    //allows player 1 to bounce off walls
    if(x1 + dx1 > (canvas.width-ballRadius) || x1 + dx1 < ballRadius) {
        dx1 = -dx1 ;
    }
    if(y1 + dy1 > canvas.height-ballRadius || y1 + dy1 < ballRadius) {
        dy1 = -dy1;
    }

    //allows player 2 to bounce off walls
    if(x2 + dx2 > (canvas.width-ballRadius) || x2 + dx2 < ballRadius) {
        dx2 = -dx2 ;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }

    // collision of players
    if(distance(x1, x2, y1, y2) <= 2 * ballRadius){
      dx1 = -dx1
      dy1 = -dy1
      dx2 = -dx2
      dy2 = -dy2
      //new location of player 1
      x1 += dx1
      y1 += dy1
      //new location of player 2
      x2 += dx2;
      y2 += dy2;

      circRad -= .05

    }else if (distance(x1, x3 ,y1, y3) >= circRad){
      console.log("Point to player 2")
       player2Points++
       console.log(player2Points)
      //add points to other player
      x1 = canvas.width/2 - 50
      y1 = canvas.height/2
    }else if (distance(x2, x3 ,y2, y3) >= circRad){
      console.log("Point to player 1")
       player1Points++
       console.log(player1Points)
      //add points to other player
      x2 = canvas.width/2 + 50
      y2 = canvas.height/2
    }else{
      //new location of player 1
      dx1 = dx1 * acc1
      dy1 = dy1 * acc1
      x1 += dx1;
      y1 += dy1;
      //new location of player 2
      dx2 = dx2 * acc2
      dy2 = dy2 * acc2
      x2 += dx2;
      y2 += dy2;
      circRad -= .05
    }

}

setInterval(draw, 10);
