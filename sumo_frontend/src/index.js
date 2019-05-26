const startForm = document.querySelector("#startForm")
let enterplayers = false
const name1 = document.querySelector("#name-1")
const name2 = document.querySelector("#name-2")

document.addEventListener("DOMContentLoaded",function(){

  startForm.addEventListener("click",function(e){
    console.log(e.target)
    if (name1.value && name2.value ){
      enterplayers = true
    }else {
    }
  })
})
