const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

/* Begins at 1 */
let currentActive =1

/* Next Button Click , highest circle count always max */
next.addEventListener('click', () =>{
    currentActive++

    if(currentActive > circles.length){
            currentActive=circles.length
    }

    update()
})

/* Prev Button Click , lowest value is 1 always*/
prev.addEventListener('click', () =>{
    currentActive--

    if(currentActive < 1){
            currentActive=1
    }
    
    update()
})



function update(){
    /* For Each circle idx color if active is greater than the index and no color when less */
    circles.forEach((circle,idx) =>{
        if(idx < currentActive) {
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    /* This moves the background line to the circle centers */
    progress.style.width=(actives.length - 1)/(circles.length -1) * 100 + '%'

    /* If 1 is active prev disabled, if 4 is active, next disabled */
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


