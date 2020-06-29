window.onload = function() {
	const leftButton = document.querySelector('.leftButton')
	const upButton = document.querySelector('.upButton')
	const rightButton = document.querySelector('.rightButton')
	const downButton = document.querySelector('.downButton')
	const blueButton = document.querySelector('.blueButton')
	const greenButton = document.querySelector('.greenButton')
	const redButton = document.querySelector('.redButton')
	const randomButton = document.querySelector('.randomButton')
	const circle = document.querySelector('.circle')

	const initialTop = circle.offsetTop
	//console.log('inicial top: ' + initialTop)
	const initialLeft = circle.offsetLeft
	//console.log('inicial left: ' + initialLeft)
	let mousedownID = -1

	function wait(ms){
	   const start = new Date().getTime()
	   let end = start
	   while(end < start + ms) {
	     end = new Date().getTime()
	  }
	}

	function moveLeft() {
		//console.log('moveLeft')
		//console.log('old position: ' + circle.offsetLeft)
		const newPosition = circle.offsetLeft - 25
		if (newPosition < -2) {
			return
		} else {
			circle.style.left = newPosition + 'px'
			//console.log('newposition: ' + newPosition)
		}
	}

	function moveUp() {
		//console.log('moveUp')
		//console.log('old position: ' + circle.offsetTop)
		const newPosition = circle.offsetTop - 25 
		if (newPosition < -2) {
			return
		} else {
			circle.style.top = newPosition + 'px'
			//console.log('newposition: ' + newPosition)
		}
	}

	function moveDown() {
		//console.log('moveDown')
		//console.log('old position: ' + circle.offsetTop)
		const newPosition = circle.offsetTop + 25
		if (initialTop*2 < newPosition){
			return
		} else {
			circle.style.top = newPosition + 'px'
			//console.log('newposition: ' + newPosition)
		}
	}

	function moveRight() {
		//console.log('moveRight')
		//console.log('old position: ' + circle.offsetLeft)
		const newPosition = circle.offsetLeft + 25
		if (initialLeft*2 < newPosition) {
			return
		} else {
			circle.style.left = newPosition + 'px'
			//console.log('newposition: ' + newPosition)		
		}
	}

	function chooseMovement(key) {
		switch (key) {
			case 37:
				//console.log('case left')
				wait(20)
				moveLeft()
				break
			case 38:
				//console.log('case up')
				wait(20)
				moveUp()
				break
			case 39:
				//console.log('case right')
				wait(20)
				moveRight()
				break
			case 40:
				//console.log('case down')
				wait(20)
				moveDown()
				break				
			default:
				return
		}	
	}

	function mouseDownInterval(number){
		if(mousedownID === -1) {
			mousedownID = setInterval(function(){
				chooseMovement(number)
			}, 50)
		}
	}

	function mouseUpinterruption() {
		if(mousedownID !== -1) {
			clearInterval(mousedownID)
			mousedownID = -1
		}
	}

	blueButton.addEventListener('click', function(){circle.style.backgroundColor = '#0000FF'})
	greenButton.addEventListener('click', function(){circle.style.backgroundColor = '#00FF00'})
	redButton.addEventListener('click', function(){circle.style.backgroundColor = '#FF0000'})

	document.addEventListener('keydown', function(){chooseMovement(event.keyCode)})
	leftButton.addEventListener('mousedown', function(){mouseDownInterval(37)})
	document.addEventListener('mouseup', mouseUpinterruption)
	upButton.addEventListener('mousedown', function(){mouseDownInterval(38)})
	//upButton.addEventListener('mouseup', mouseUpinterruption)
	rightButton.addEventListener('mousedown', function(){mouseDownInterval(39)})
	//rightButton.addEventListener('mouseup', mouseUpinterruption)
	downButton.addEventListener('mousedown', function(){mouseDownInterval(40)})
	//downButton.addEventListener('mouseup', mouseUpinterruption)
	randomButton.addEventListener('mousedown', function(){
		if(mousedownID === -1) {
			mousedownID = setInterval(function(){
				const randomDirection = Math.ceil(Math.random() * (40 - 36) + 36)
				console.log(randomDirection)
				chooseMovement(randomDirection)
			}, 50)
		}
	})
	randomButton.addEventListener('mouseup', mouseUpinterruption)

}
	




