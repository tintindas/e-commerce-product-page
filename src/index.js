const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const quantity = document.getElementById('quantity')

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
