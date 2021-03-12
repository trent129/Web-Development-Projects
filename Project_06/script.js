const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom  =window.innerHeight
    boxes.forEach (box =>{
        const boxBot = box.getBoundingClientRect().bottom

        /* Keep box on screen when it's bottom is less than the window bottom*/
        if(boxBot < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}