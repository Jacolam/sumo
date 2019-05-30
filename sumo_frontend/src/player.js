const canvas = document.getElementById("myCanvas");
const changeSpritesBtn= document.getElementById('change-sprites')
const timerX = document.getElementById('gig')
var ctx = canvas.getContext("2d");
let playerSprite1 = new Image();
let playerSprite2 = new Image();

//helper functions
const plusOrMinus = function(){
  if (Math.random() < 0.5){
    return -1
  }else{
    return 1}
}

const distance = function(x1, x2,y1, y2){
  return Math.sqrt((x1-x2)**2 +(y1-y2)**2)
}

const randomLocX = function(){
  return (canvas.width/2 + Math.random()*(circRad-20)*plusOrMinus())
}

const randomLocY = function(){
  return (canvas.height/2 + Math.random()*(circRad-20)*plusOrMinus())
}

//player 1 variables
var x1 = canvas.width/2 - 50 ;
var y1 = canvas.height-250;
var dx1 = 0;
var dy1 = 0;
var acc1 = .99
var p1multiplier = 1.5
var ballRadius1 = 20;

//player 2 variables
var x2 = canvas.width/2 + 50 ;
var y2 = canvas.height-250;
var dx2 = 0;
var dy2 = 0;
var acc2 = .99
var p2multiplier = 1.5
var ballRadius2 = 20;

// outer circle params
var x3 = canvas.width/2 ;
var y3 = canvas.height/2 ;
var circRad = 300

//powerup locations
var x4 = canvas.width/2 + Math.random()*200*plusOrMinus()
var y4 = canvas.height/2 + Math.random()*200*plusOrMinus()

//in game points and timers
var player1Points = 0
const p1Score = document.getElementById('p1-score')

var player2Points = 0
const p2Score = document.getElementById('p2-score')

var roundtimer = 4500

//defining players and objects
function player1() {
    ctx.beginPath();
    ctx.arc(x1, y1, ballRadius1, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(playerSprite1, x1 - ballRadius1, y1 - ballRadius1, 2 * ballRadius1, 2 * ballRadius1);
}

function player2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius2, 0, Math.PI*2);
    ctx.fillStyle = "#9995DD";
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(playerSprite2, x2 - ballRadius2, y2 - ballRadius2, 2 * ballRadius2, 2 * ballRadius2);
}

function deathCircle() {
  ctx.beginPath();
  ctx.arc(x3, y3, circRad, 0, Math.PI *2);
  ctx.stroke();
  ctx.closePath();
}

// power up
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

//redrawing each frame
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(powerup){
    bubba();
  }else{
    counter++
    if((counter % 200) === 0){
      powerup = true
      console.log("spawning")
      x4 = randomLocX()
      y4 = randomLocY()
      bubba()
    }
  }
  // redraws all locations
  player1();
  player2();
  deathCircle();
  //brings player to complete stop
  if( Math.abs(dx1) < .2){dx1 = 0}
  if (Math.abs(dy1) <.2){dy1 = 0}
  if( Math.abs(dx2) < .2){dx2 = 0}
  if (Math.abs(dy2) <.2){dy2 = 0}

  // collision of players
  if(distance(x1, x2, y1, y2) <= ballRadius1 + ballRadius2){
    if(dx1=== 0 && dy1=== 0){
      // console.log("player 1 is not moving")
      dx1 = -dx2
      dy1 = -dy2
    }else if (dx2=== 0 && dy2=== 0){
      // console.log("player 2 is not moving")
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
    }

  //collision with circle
  }else if (distance(x1, x3 ,y1, y3) >= circRad){
    // console.log("Point to player 2")
     player2Points++
     p2Score.innerHTML = `<h3 class="score-alignment" style='color: purple;'>score: ${player2Points}</h3>`
    x1 = randomLocX()
    y1 = randomLocY()
    dx1 = 0
    dy1 = 0
  }else if (distance(x2, x3 ,y2, y3) >= circRad){
    console.log("Point to player 1")
     player1Points++
    p1Score.innerHTML = `<h3 class="score-alignment" style='color: blue;'>score: ${player1Points}</h3>`
     console.log(player1Points)
    x2 = randomLocX()
    y2 = randomLocY()
    dx2 = 0
    dy2 = 0

  //collision with powerup
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
  }

  if(enterplayers){

    let x = roundtimer--
    let y = Math.round(x / 100)

    if(y === 0){ /*ends the game*/
      if (player1Points > player2Points){
        location.reload();
      }else{
        location.reload();}
    }else if(y <= 10){timerX.innerHTML = `<h3 class="rTimer" style='color:red' id="gig">${y}</h3>`
    }
    else{
      timerX.innerText = y
    }

    if (circRad < 170){
      //minimum circle size
    }else {
      //cirlce shrinks when games begins
      circRad -= .05
    }
  }
} // end of draw

changeSpritesBtn.addEventListener('click', e=>{
  let spritesGroup = ['./assets/popeye.png', './assets/evans.png','./assets/ralph.png', './assets/snorlax.png', './assets/seb.png', './assets/pikachu.png'];
  let index = Math.floor((Math.random() * spritesGroup.length))
  // group sprite
  if(index == 0){
    return playerSprite1.src = spritesGroup[index],
          playerSprite2.src = spritesGroup[index+1];
  }else if(index > 0 && index <5){
    return playerSprite1.src = spritesGroup[index],
          playerSprite2.src = spritesGroup[index+1];
  }else{
    return playerSprite1.src = spritesGroup[index],
          playerSprite2.src = spritesGroup[index-1];
  }
})

setInterval(draw, 10);
