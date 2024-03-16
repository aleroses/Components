import { getDiscoverMovies } from "../API/get-discover-movies.mjs";

const showDiscoverMovies = async () => {
  const genre = document.querySelector(".genre").value;
  const year = document.querySelector(".year").value;
  const rating = document.querySelector(".rating").value;
  const sort = document.querySelector(".sort").value;

  console.log(genre, year, rating, sort);
  const moviesContainer = document.querySelector(".movies-container");
  moviesContainer.innerHTML = "";
  const page = 2;

  const data = await getDiscoverMovies({
    page,
    genre,
    year,
    rating,
    sort,
  });

  data.results.forEach((movie) => {
    const movieContainer = document.createElement("div");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const details = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = movie.title;
    const overview = document.createElement("p");
    overview.textContent = movie.overview;

    movieContainer.classList.add("movie-container");
    details.classList.add("details");

    details.append(title, overview);
    movieContainer.append(img, details);
    moviesContainer.append(movieContainer);
  });
};

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  showDiscoverMovies();
});

export { showDiscoverMovies };
