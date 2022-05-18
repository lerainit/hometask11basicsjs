const form = document.querySelector('form');

const inputs = document.querySelectorAll('input')
const input1 = document.querySelector('#input-1')
const input2 = document.querySelector('#input-2')
const removeMessage = (elem) => elem.remove();

form.addEventListener('click', (e) => {
        
	let target = e.target

	target.type === "password" ? target.type = "text" : target.type = "password";

	target.classList.toggle('active');

	let targetAfter = document.querySelectorAll(`${target.dataset.after}`)

	targetAfter.forEach(item => item.classList.toggle('active'));

})

form.addEventListener('submit', (e) => {

	e.preventDefault()

		const redMessage = document.querySelector('.red')

	input1.value === input2.value && input1.value && input2.value ? alert('You are welcome') : redMessage.classList.add('active');

const redActiveMessage = document.querySelector('.red.active')

	if (redActiveMessage) {
		inputs.forEach(input => {
			input.addEventListener('focus', () => redActiveMessage.classList.remove('active'));
			input.removeEventListener('focus', () => redActiveMessage.classList.remove('active'));

		})
	}

	//form.reset()
})
