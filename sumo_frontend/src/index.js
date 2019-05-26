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

})
