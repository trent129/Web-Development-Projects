const buttons = document.querySelectorAll('.ripple')


buttons. forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.ClientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        
        // Create circles
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'


        this.appendChild(circle)

        // Removes circle from the dom after
        setTimeout(() => circle.remove(),500)
    })
})