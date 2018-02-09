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
}
function sizeUp(){
	console.log('+')
	clockContainer.style.fontSize='25px'
	window.addEventListener('keypress', hideClock)
	
}
function sizeDown(){
	clockContainer.style.fontSize='5px'
	console.log('-')
	window.addEventListener('keypress', hideClock)
}
function hideClock(event){
	console.log(event)
	if(event.key =='h')
	clockContainer.style.display = 'none'
	//clockContainer.style.visibility = 'hidden'
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