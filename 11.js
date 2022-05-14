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

	input1.value === input2.value && input1.value && input2.value ? alert('You are welcome') : document.body.insertAdjacentHTML('beforeend', '<p class="red">Потрібно ввести однакові значення</p>');

	const redMessage = document.querySelector('.red')

	if (redMessage) {
		inputs.forEach(input => {
			input.addEventListener('focus', () => removeMessage(redMessage));
			input.removeEventListener('focus', () => removeMessage(redMessage));

		})
	}

	//form.reset()
})
