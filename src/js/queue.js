
class QueueLS {
    // check from localStorage
    getFromLS(){
        let movies;
        if (localStorage.getItem('movies')=== null) {
             movies = []
        } else {
            movies = JSON.parse (localStorage.getItem ("movies"))
        }
        return movies;
    }
    // save to localStorage
    saveIntoLS (movie) {
        const movies = this.getFromLS();
        movies.push(movie);
        localStorage.setItem("movies", JSON.stringify(movies))
    }
}
const movieQueue = new QueueLS()

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal-movie__btn-queue')){
        const cardBody = e.target.offsetParent
        const movieInfo = {
            id: e.target.dataset.id,
            name: cardBody.querySelector(".modal-movie__title").textContent,
            poster: cardBody.querySelector(".modal-movie__poster").src
        }
        // console.log(movieInfo)
        movieQueue.saveIntoLS(movieInfo)
  }
})
localStorage.clear()

