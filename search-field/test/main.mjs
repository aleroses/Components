import { api_key } from "../multiple-searches/autorization.mjs";

const API_KEY = api_key;

const renderMovies = (movies) => {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const movieImage = document.createElement("div");
    movieImage.classList.add("movie-image");

    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieImage.append(image);

    const movieDetails = document.createElement("div");

    const title = document.createElement("h2");
    title.classList.add("movie-title");
    title.textContent = movie.title;

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("movi-release-date");
    releaseDate.textContent = `Release Date: ${movie.release_date}`;

    const overview = document.createElement("p");
    overview.classList.add("movie-overview");
    overview.textContent = movie.overview;

    movieDetails.append(title, releaseDate, overview);
    movieElement.append(movieImage, movieDetails);
    moviesContainer.append(movieElement);
  });
};

const searchMovies = async () => {
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value;
  const rating = document.getElementById("rating").value;
  const sort = document.getElementById("sort").value;

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sort}&primary_release_year=${year}&vote_average.gte=${rating}&with_genres=${genre}&page=3`;
  console.log(url);

  // &sort_by=popularity.desc
  // &sort_by=popularity.asc

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      renderMovies(data.results);
    } else {
      console.error("Error...", response.status);
    }
  } catch (error) {
    console.error("Error...", error);
  }
};

const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", searchMovies);

searchMovies();
