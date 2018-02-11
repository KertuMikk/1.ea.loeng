// Avalikud muutujad
let clockContainer // = null
 


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
 

  startClock()

  //document.querySelector('#size-up').onclick
  document.querySelector('#size-down').addEventListener('click',sizeDown) //2 erinevat versiooni kuidas kuulata
  document.querySelector('#size-up').addEventListener('click',sizeUp)
  window.addEventListener('keypress', hideClock)
  window.addEventListener('keypress', showClock)
}
function sizeUp(){
	console.log('+')
	clockContainer.style.fontSize='25px'
	
	
}
function sizeDown(){
	clockContainer.style.fontSize='5px'
	console.log('-')

}
function hideClock(event){
	console.log(event)
	if(event.key =='h')
  clockContainer.style.display = 'none'
  
}
function showClock(event){
	console.log(event)
	if(event.key =='s')
  clockContainer.style.display = 'all'
  
}
function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
 

  clockContainer.innerHTML = new Date()
}