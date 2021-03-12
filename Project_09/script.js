const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    /* Gets label name */
    label.innerHTML= label.innerText
        /* Splits into an array of separate letters */
        .split('')
        /* mapping it to create an array with a span around it , the transition delay create a wave by the idx value*/
        .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        /* Turns it into a span again */
        .join('')
})
