import { authorization } from "./authorization.mjs";

const getSearchMovies = async (name) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${authorization}&query=${name}`
  );
  const data = await response.json();

  console.log(name);
  return data;
};

export { getSearchMovies };
