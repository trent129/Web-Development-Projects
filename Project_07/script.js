
/* Create Array of Sounds*/
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

/* Loop through the sounds and create a button each time*/
sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    /* Event Listener to Play Sound*/
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

/* Stops and resets the sound */
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}