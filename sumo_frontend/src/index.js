<<<<<<< HEAD
const  inputName1= document.getElementById("player1")
const inputName2 = document.getElementById("player2")
const container = document.getElementById("container")
const form = document.getElementById("username")
const startBtn = document.getElementById('startBtn')
const restartBtn = document.getElementById('restartBtn')
// const jsfile = document.getElementsByClassName('jsfile')[0]
// let startGame = false
container.addEventListener('click', e=>{
  if(e.target.id === 'startBtn'){
    if(inputName1.value !== '' & inputName2.value !== ''){
          startBtn.style.display = 'none';
          myCanvas.style.display = 'block';
          restartBtn.style.display = 'block';
          form.style.display = 'none';
       }else{
         alert('Please enter username')
       }
  }
=======
const startForm = document.querySelector("#startForm")
let enterplayers = false

let controlsView = false
const controlPanel = document.querySelector("#control-panel")
controlPanel.style.display = "none"

const name1 = document.querySelector("#name-1")
const name2 = document.querySelector("#name-2")

document.addEventListener("DOMContentLoaded",function(){

  startForm.addEventListener("click",function(e){
    // console.log(e.target.name)
    const target = e.target.name
    if(target === "start")
    if (name1.value && name2.value ){
      enterplayers = true
    }else {
      alert("Please add player names")
    }
    if(target === "controls"){
      controlsView = !controlsView
      if (controlsView){
        controlPanel.style.display = 'block'
      }else {
        controlPanel.style.display = 'none'
      }
    }
  })

  document.addEventListener("keypress",function(e){

    // const prevKey1 = pressKey
  pressKey = e.key

    if (enterplayers){
    switch(pressKey){
      //player 1 listener
      case 'w':
        dy1 += -1
        break;
      case 's':
        dy1 += 1
        break;
      case 'a':
        dx1 += -1
        break;
      case 'd':
        dx1 += 1
        break;
        // player 1 listener end
        //reset locations if stuck
      case ' ':
        x1 = canvas.width/2 - 50 
        y1 = canvas.height-250

        x2 = canvas.width/2 + 50
        y2 = canvas.height-250
        break;
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
>>>>>>> master

})
