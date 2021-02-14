const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

/*Learned Toggle, it switches between adding and removing classes */
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})