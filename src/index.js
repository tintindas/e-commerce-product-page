const bg = document.getElementById('bg')
const nav = document.getElementById('navbar')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const slider = document.getElementById('slider')
const images = document.getElementsByClassName('image-container')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const quantity = document.getElementById('quantity')

// Navbar

menuBtn.addEventListener('click', () => {
	bg.classList.add('faded')
	nav.classList.add('open')
})

closeBtn.addEventListener('click', () => {
	bg.classList.remove('faded')
	nav.classList.remove('open')
})

// Slider
let currentIndex = 1
let isMoving = false

const moveSlider = () => {
	isMoving = true
	slider.style.transform = `translateX(-${currentIndex * 100}vw)`
}

arrowLeft.addEventListener('click', () => {
	if (isMoving) return
	currentIndex--
	moveSlider()
})

arrowRight.addEventListener('click', () => {
	if (isMoving) return
	currentIndex++
	moveSlider()
})

slider.addEventListener('transitionend', () => {
	isMoving = false
	if (currentIndex === 0) {
		currentIndex = images.length - 2
		slider.style.transitionDuration = '1ms'
		return moveSlider()
	}
	if (currentIndex === images.length - 1) {
		currentIndex = 1
		slider.style.transitionDuration = '1ms'
		return moveSlider()
	}
	slider.style.transitionDuration = '300ms'
})

// Quantity

let quant = parseInt(quantity.innerHTML)

minus.addEventListener('click', () => {
	if (quant > 0) {
		quant -= 1
		quantity.innerHTML = quant
	}
})

plus.addEventListener('click', () => {
	quant += 1
	quantity.innerHTML = quant
})
