const key = '2b7c9807';

const containerMovies = document.querySelector('.container-movies');
const inputSearch = document.querySelector('.inputSearch');
const goBtn = document.querySelector('.goBtn');
const favBtn = document.querySelector('.favBtn');

goBtn.addEventListener('click', () => {
    if (inputSearch.value !== '') {

        const searchTerm = inputSearch.value;
        getMovies(searchTerm);
        

    } else {
        console.log('Please fill in the movie title');
    }
});




function getMovies(searchTerm) {
    axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${searchTerm}`)
        .then(response => {
            
            if (response.data.Search) {
                const movies = response.data.Search;
                movies.forEach(movie => {
                    console.log(movie)

                    const title = movie.Title
                    const date = movie.Year
                    const img = movie.Poster

                    const movieCard = document.createElement('div')
                    const titleCard = document.createElement('h1')
                    const dateCard = document.createElement('h2')
                    const imgCard = document.createElement('img')

                    titleCard.textContent = title
                    dateCard.textContent = date
                    imgCard.src = img
                    imgCard.alt = "marche pas"

                    movieCard.classList.add('movie-card')
                    titleCard.classList.add('title-card')
                    dateCard.classList.add('date-card')
                    imgCard.classList.add('img-card')
                    

                    movieCard.appendChild(titleCard)
                    movieCard.appendChild(dateCard)
                    movieCard.appendChild(imgCard)
                    
                    containerMovies.appendChild(movieCard)
                })

                





            } else {
                console.log('No movies found');
            }
        })
        .catch(error => console.error('Error fetching movie data:', error));
}







window.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        goBtn.click()
    }
})