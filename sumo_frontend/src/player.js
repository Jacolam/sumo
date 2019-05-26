var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
//player 1
var x = canvas.width/2 - 50 ;
var y = canvas.height-250;
var dx = 0;
var dy = 0;
var acc1 = .99
//player 2
var x2 = canvas.width/2 + 50 ;
var y2 = canvas.height-250;
var dx2 = 0;
var dy2 = 0;
var acc2 = .99

var cx = canvas.width/2 ;
var cy = canvas.height/2 ;

const distance = function(){
  return Math.sqrt((x-x2)**2 +(y-y2)**2)
}
var pressKey = 0

document.addEventListener("keypress",function(e){
  // console.log("something was pressed")
  const prevKey = pressKey
  pressKey = e.key
  // console.log(enterplayers)
  if (enterplayers){
  switch(pressKey){
    //player 1 listener
    case 'w':
      dy += -1
      break;

    case 's':
      dy += 1
      break;

    case 'a':
      dx += -1
      break;

    case 'd':
      dx += 1
      break;

    case ' ':
      dx = 0
      dy = 0
      break;
    // player 1 listener end

    //player 2 listener
    case 'i':
      dy2 = -1
      break;
    case 'k':
      dy2 = 1
      break;
    case 'j':
      dx2 = -1
      break;
    case 'l':
      dx2 = 1
      break;
      case ',':
        dx2 = 0
        dy2 = 0
        break;
      //player 2 listener end
  }//switch end
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

  function deathCircle() {
    ctx.beginPath();
    ctx.arc(cx, cy, 200, 0, Math.PI *2);
    ctx.fillStyle = "#0095DD";
    ctx.stroke();
    ctx.closePath();
  }

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player1();
    player2();
    deathCircle();
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

    // collision of players
    if(distance() <= 2 * ballRadius){
      dx = -dx;
      dy = -dy;
      dx2 = -dx2
      dy2 = -dy2
      //new location of player 1
      x += dx;
      y += dy;
      //new location of player 2
      x2 += dx2;
      y2 += dy2;

    }else{
      //new location of player 1
      dx = dx * acc1
      dy = dy * acc1
      x += dx;
      y += dy;
      //new location of player 2
      dx2 = dx2 * acc2
      dy2 = dy2 * acc2
      x2 += dx2;
      y2 += dy2;
    }

}

setInterval(draw, 10);
