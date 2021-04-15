const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0e7ff77931448e4ccd425e905b76b05b&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=0e7ff77931448e4ccd425e905b76b05b&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {

        //Destructing used here to pull different information
        const { title, poster_path, vote_average, overview } = movie


        //Creates the movie div with the information from the API
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
         <img src="${IMG_PATH + poster_path}" alt="${title}">
         <div class="movie-info">
        <h3>${title}</h3>
        <span class=${getClassByRate(vote_average)}>${vote_average}</span>
         </div>
         <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
        `
        main.appendChild(movieEl)
    })
}


// Gives it a color based on the average rating 
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green' 
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit',  (e) => {
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
