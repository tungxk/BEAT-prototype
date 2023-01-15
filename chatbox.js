// open chat box
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})

// open message menu 
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
	if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
		dropdownMenu.classList.remove('show')
	}
})

// submit message
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
	let line = textarea.value.split('\n').length
})

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()
	if(isValid(textarea.value)) {
		writeMessage()
	}
})

function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}