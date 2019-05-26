const startForm = document.querySelector("#startForm")
let enterplayers = false
const name1 = document.querySelector("#name-1")
const name2 = document.querySelector("#name-2")

document.addEventListener("DOMContentLoaded",function(){

  startForm.addEventListener("click",function(e){
    // console.log(e.target)
    if (name1.value && name2.value ){
      enterplayers = true
    }else {
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
      case ' ':
        dx1 = 0
        dy1 = 0
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

})
