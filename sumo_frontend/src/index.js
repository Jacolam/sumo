var dx = 0;
var dy = 0;
document.addEventListener("keypress",function(e){
  // console.log("something was pressed")
  console.log(e.key)
  const pressKey = e.key

  switch(pressKey){
    //player 1 listener
    case 'w':
      console.log("moving up")
      dx = 0
      dy =+ -0.5
      break;

    case 's':
      console.log("moving down")
      dx = 0
      dy += 0.5
      break;

    case 'a':
      console.log("moving left")
      dx =+ -0.5
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
      dy2 =+ -0.5
      break;

    case 'k':
      console.log("moving down")
      dx2 = 0
      dy2 += 0.5
      break;

    case 'j':
      console.log("moving left")
      dx2 =+ -0.5
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
