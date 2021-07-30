const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function Movie() {
  this.fetchMovie = function getMovie(url) {
    console.log('fetcing moview', this)
    fetch(url, {method: 'GET'}).then((res => res.json())).then((res) => {
      console.log('response in fetching movie',res, this);
      this.movieData = res;
      this.renderMovie()
    })
  }
  this.renderMovie = function renderMovie() {
    console.log('printing movies', this.movieData)
    main.innerHTML = '';
    this.movieData.results.forEach((item) => {
      const movieElem = document.createElement('div');
      movieElem.classList.add('movie');
      movieElem.innerHTML = `<img src=${IMGPATH}${item.backdrop_path} /><div class="movie-info">${item.title}</div>`
      main.appendChild(movieElem);
    })
  }
  this.fetchMovie(APIURL);
}

var movie = new Movie();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  debugger;
  const searchValue = search.value;
  movie.fetchMovie(SEARCHAPI + searchValue)
})