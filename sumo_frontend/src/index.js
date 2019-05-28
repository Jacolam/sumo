const startForm = document.querySelector("#startForm")

let enterplayers = false
let controlsView = false

const controlPanel = document.querySelector("#control-panel")

const name1 = document.querySelector("#name-1")
const name2 = document.querySelector("#name-2")

const p1 = document.getElementById('p1-tag')
const p2 = document.getElementById('p2-tag')



document.addEventListener("DOMContentLoaded",function(){


  startForm.addEventListener("click",function(e){
    console.log(e.target.name)
    const target = e.target.name
    if(target === "start")
    if (name1.value && name2.value ){

      enterplayers = true
      myCanvas.style.display = 'block';
      startForm.style.display = 'none'

      p1.innerHTML = `<h3 class="name-alignment" style='color: blue;'>${name1.value}</h3>`
      p2.innerHTML = `<h3 class="name-alignment" style='color: purple;'>${name2.value}</h3>`

      p1Score.innerHTML = `<h3 class="score-alignment" style='color: blue;'>score: 0</h3>`
      p2Score.innerHTML = `<h3 class="score-alignment" style='color: purple;'>score: 0</h3>`

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
        dy1 += -2
        break;
      case 's':
        dy1 += 2
        break;
      case 'a':
        dx1 += -2
        break;
      case 'd':
        dx1 += 2
        break;
        // player 1 listener end
        //reset locations if stuck
      case 'e':
        dx1 = 0
        dy1 = 0 
        break;
      case ' ':
        x1 = canvas.width/2 - 50
        y1 = canvas.height-250

        x2 = canvas.width/2 + 50
        y2 = canvas.height-250
        break;
      //player 2 listener
      case 'i':
        dy2 += -2
        break;
      case 'k':
        dy2 += 2
        break;
      case 'j':
        dx2 += -2
        break;
      case 'l':
        dx2 += 2
        break;
      case 'u':
        dx2 = 0
        dy2 = 0
      break;
        //player 2 listener end
    }//switch end
  }
  })

})
