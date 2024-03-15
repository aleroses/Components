import { getSearchMovies } from "./get-search-movie.mjs";

const searchInput = document.querySelector(".input");
const searchResults = document.querySelector(".container");

const showSearchMovies = async (name) => {
  const data = await getSearchMovies(name);

  searchResults.innerHTML = "";

  data.results.map((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;

    searchResults.append(li);
  });
};

searchInput.addEventListener("input", () => {
  const searchName = searchInput.value.toLowerCase();

  showSearchMovies(searchName);
});
