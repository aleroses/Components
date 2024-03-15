/* 
import { getPopular } from "./getPopular.mjs";

const renderMovies = (movies) => {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const movieImage = document.createElement("div");
    movieImage.classList.add("movie-image");
    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    movieImage.appendChild(image);

    const movieDetails = document.createElement("div");
    const title = document.createElement("h2");
    title.classList.add("movie-title");
    title.textContent = movie.title;
    const releaseDate = document.createElement("p");
    releaseDate.classList.add("movie-release-date");
    releaseDate.textContent = "Release Date: " + movie.release_date;
    const overview = document.createElement("p");
    overview.classList.add("movie-overview");
    overview.textContent = movie.overview;

    movieDetails.appendChild(title);
    movieDetails.appendChild(releaseDate);
    movieDetails.appendChild(overview);

    movieElement.appendChild(movieImage);
    movieElement.appendChild(movieDetails);

    moviesContainer.appendChild(movieElement);
  });
};

const searchMovies = () => {
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value;
  const rating = document.getElementById("rating").value;
  const sort = document.getElementById("sort").value;

  getPopular(1, genre, year, rating, sort)
    .then((data) => {
      renderMovies(data.results);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Escuchar el evento click del botón de búsqueda
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", searchMovies);

// Llamar a la función de búsqueda inicialmente para mostrar todas las películas populares
searchMovies(); 
*/

import { autorization, api_key } from "./autorization.mjs";
const API_KEY = api_key; // Reemplaza 'tu_api_key' con tu propia clave de API

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
    movieImage.appendChild(image);

    const movieDetails = document.createElement("div");
    const title = document.createElement("h2");
    title.classList.add("movie-title");
    title.textContent = movie.title;

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("movie-release-date");
    releaseDate.textContent = "Release Date: " + movie.release_date;

    const overview = document.createElement("p");
    overview.classList.add("movie-overview");
    overview.textContent = movie.overview;

    movieDetails.appendChild(title);
    movieDetails.appendChild(releaseDate);
    movieDetails.appendChild(overview);

    movieElement.appendChild(movieImage);
    movieElement.appendChild(movieDetails);

    moviesContainer.appendChild(movieElement);
  });
};

const searchMovies = async () => {
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value;
  const rating = document.getElementById("rating").value;
  const sort = document.getElementById("sort").value;

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sort}&primary_release_year=${year}&vote_average.gte=${rating}&with_genres=${genre}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      renderMovies(data.results);
    } else {
      console.error(
        "Error en la respuesta de la API:",
        response.status
      );
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};

// Escuchar el evento click del botón de búsqueda
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", searchMovies);

// Llamar a la función de búsqueda inicialmente para mostrar todas las películas populares
searchMovies();
