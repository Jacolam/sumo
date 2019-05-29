var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const changeSpritesBtn= document.getElementById('change-sprites')
let playerSprite1 = new Image();
let playerSprite2 = new Image();
let evans = false;
let ralph = false;
var ballRadius = 20;
//player 1
var x1 = canvas.width/2 - 50 ;
var y1 = canvas.height-250;
var dx1 = 0;
var dy1 = 0;
var acc1 = .99
var p1multiplier = 1.5
var ballRadius1 = 20;

//player 2
var x2 = canvas.width/2 + 50 ;
var y2 = canvas.height-250;
var dx2 = 0;
var dy2 = 0;
var acc2 = .99
var p2multiplier = 1.5
var ballRadius2 = 20;
// circle params
var x3 = canvas.width/2 ;
var y3 = canvas.height/2 ;
var circRad = 300
//in game points
var player1Points = 0
var player2Points = 0

var globaltimer = 0
//power up
const plusOrMinus = function(){
  if (Math.random() < 0.5){
    return -1
  }else{
    return 1}}
// debugger
var x4 = canvas.width/2 + Math.random()*200*plusOrMinus()
var y4 = canvas.height/2 + Math.random()*200*plusOrMinus()

let p2Score = document.getElementById('p2-score')
let p1Score = document.getElementById('p1-score')


const distance = function(x1, x2,y1, y2){
  return Math.sqrt((x1-x2)**2 +(y1-y2)**2)
}

  function player1() {
      ctx.beginPath();
      ctx.arc(x1, y1, ballRadius1, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
      ctx.drawImage(playerSprite1, x1-ballRadius1, y1-ballRadius1, 2 * ballRadius1, 2 * ballRadius1);
  }

  function player2() {
      ctx.beginPath();
      ctx.arc(x2, y2, ballRadius2, 0, Math.PI*2);
      ctx.fillStyle = "#9995DD";
      ctx.fill();
      ctx.closePath();
      ctx.drawImage(playerSprite2, x2-ballRadius2, y2-ballRadius2, 2 * ballRadius2, 2 * ballRadius2);
  }

  function deathCircle() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius2, 0, Math.PI*2);
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

let shroomsprite = new Image()
shroomsprite.src = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/new-super-mario-bros-u/0/00/3a083df05201781d56433d893565e39edca3e161_large.jpg?width=640"

function bubba(){
  ctx.beginPath();
  ctx.arc(x4, y4, 20, 0, Math.PI *2);
  ctx.closePath();
  ctx.drawImage(shroomsprite, x4 - 25, y4 -25, 50, 50)
}

var powerup = true
var counter = 0
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(powerup){
      bubba();
    }else{
      counter++
      if((counter % 200) === 0){
        powerup = true
        console.log("spawning")
        x4 = canvas.width/2 + Math.random()*(circRad-5)*plusOrMinus()
        y4 = canvas.height/2 + Math.random()*(circRad-5)*plusOrMinus()
        bubba()
      }
    }
    player1();
    player2();
    deathCircle();

    if( Math.abs(dx1) < .2){
      dx1 = 0
    }
    if (Math.abs(dy1) <.2){
      dy1 = 0
    }
    if( Math.abs(dx2) < .2){
      dx2 = 0
    }
    if (Math.abs(dy2) <.2){
      dy2 = 0
    }
    //allows player 1 to bounce off walls
    // if(x1 + dx1 > (canvas.width-ballRadius1) || x1 + dx1 < ballRadius1) {
    //     dx1 = -dx1 ;
    // }
    // if(y1 + dy1 > canvas.height-ballRadius1 || y1 + dy1 < ballRadius1) {
    //     dy1 = -dy1;
    // }
    //
    // //allows player 2 to bounce off walls
    // if(x2 + dx2 > (canvas.width-ballRadius2) || x2 + dx2 < ballRadius2) {
    //     dx2 = -dx2 ;
    // }
    // if(y2 + dy2 > canvas.height-ballRadius2 || y2 + dy2 < ballRadius2) {
    //     dy2 = -dy2;
    // }

    // collision of players
    if(distance(x1, x2, y1, y2) <= ballRadius1 + ballRadius2){
      if(dx1=== 0 && dy1=== 0){
        console.log("player 1 is not moving")
        dx1 = -dx2
        dy1 = -dy2
      }else if (dx2=== 0 && dy2=== 0){
        console.log("player 2 is not moving")
        dx2 = -dx1
        dy2 = -dy1
      }else{
      dx1 = -dx1 * p1multiplier
      dy1 = -dy1  * p1multiplier
      dx2 = -dx2 * p2multiplier
      dy2 = -dy2 * p2multiplier
      //new location of player 1
      x1 += dx1
      y1 += dy1
      //new location of player 2
      x2 += dx2;
      y2 += dy2;
      circRad -= .05}

    }else if (distance(x1, x3 ,y1, y3) >= circRad){
      console.log("Point to player 2")
       player2Points++
       p2Score.innerHTML = `<h3 class="score-alignment" style='color: purple;'>score: ${player2Points}</h3>`
       // if(player2Points === 3) {
       //   alert(`${name2.value} has Won!`)
       // }
      //add points to other player
      x1 = canvas.width/2 - 50
      dx1 = 0
      y1 = canvas.height/2
      dy1 = 0
      //collision with circle
    }else if (distance(x2, x3 ,y2, y3) >= circRad){
      console.log("Point to player 1")
       player1Points++
      p1Score.innerHTML = `<h3 class="score-alignment" style='color: blue;'>score: ${player1Points}</h3>`
       console.log(player1Points)
       // if(player1Points === 3) {
       //   alert(`${name1.value} has Won!`)
       // }
      //add points to other player
      x2 = canvas.width/2 + 50
      dx2 = 0
      y2 = canvas.height/2
      dy2 = 0
    }else if (distance(x1,x4,y1,y4)<= ballRadius1 + 20){
      ballRadius1 += 3
      powerup = false
      p1multiplier = p1multiplier*.93
      x4 = 0
      y4 = 0
    }else if (distance(x2,x4,y2,y4)<= ballRadius2 + 20){
      ballRadius2 += 3
      powerup = false
      p2multiplier = p2multiplier*.93
      x4 = 0
      y4 = 0
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
    if(enterplayers){
        globaltimer++
        if(globaltimer/100 > 45){
          if (player1Points > player2Points){
            alert(`${name1.value} has Won!`)
          }else{alert(`${name2.value} has Won!`)}
        }
        if (circRad < 170){
          // alert('circle ended')
        }else {
          circRad -= .05
        }
      }// circle only begins to move after the game has started
    }
}

changeSpritesBtn.addEventListener('click', e=>{
      evans = !evans
      ralph = !ralph
      if(evans && ralph){
  return playerSprite1.src = "./assets/evans.png",
       playerSprite2.src = "./assets/ralph.png";

    }
})
setInterval(draw, 10);
