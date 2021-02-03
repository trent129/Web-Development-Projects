// Selects all the panels
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    // Click function instance added 
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // Adds active class to one that was clicked 
        panel.classList.add('active')
    })
})

// Removes all the active classes from panel before clicking
function removeActiveClasses() {
    // Panels is what you are looping through
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })

}