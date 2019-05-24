const  inputName1= document.getElementById("player1")
const inputName2 = document.getElementById("player2")
const container = document.getElementById("container")
const form = document.getElementsByTagName('form')[0]
// const jsfile = document.getElementsByClassName('jsfile')[0]

container.addEventListener('click', e=>{
      if(e.target.className === 'start'){
        if(inputName1.value && inputName2.value){
          form.style.display = 'none'
          e.target.innerText = 'Restart'
      }else {
        alert('Please create Username!')
        }
      }
})
