//avalikud muutujad 
let clockContainer // = null



window.onload = function () {
init()
}
function init(){
	const clockContainer = document.querySelector('#clock')
	console.log(clockContainer)
	startClock()

}
 
 function startClock (){
 	
	 window.setInterval(function() {
	 const date = new Date()
	 clockContainer.innerHTML = date
	 }
	 ,1000)
 }
