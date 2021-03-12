const jokeEl = document.getElementById('joke')
const jokebtn =  document.getElementById('jokeBtn')

jokebtn.addEventListener('click', generateJoke)

generateJoke()


/* Gets joke from http request API https://icanhazdadjoke.com */
async function generateJoke() {
    const config = { 
        headers: {
        'Accept': 'application/json'
        }
    }

    const res = await fetch ('https://icanhazdadjoke.com', config)

    const data  = await res.json()
    
    jokeEl.innerHTML = data.joke 
}
