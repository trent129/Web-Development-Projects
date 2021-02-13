/* Variables */
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector( '.container')

/* Open Button Click */
open.addEventListener('click', () => container.classList.add('show-nav'))

/* Click Button Click */
close.addEventListener('click', () => container.classList.remove('show-nav'))