import { authorization, apiKey } from "./authorization.mjs";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: authorization,
  },
};

const getDiscoverMovies = async (
  {page = 1,
  genre,
  year,
  rating,
  sort}
) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genre}&year=${year}&vote_average.gte=${rating}&sort_by=${sort}`,
    options
  );

  console.log(response);

  const data = await response.json();
  console.log(data);

  return data;
};

export { getDiscoverMovies };

/* 
- vote_average.gte: Filtra las películas cuya calificación promedio de votos sea mayor o igual (>=) al valor especificado.

- vote_average.lte: Filtra las películas cuya calificación promedio de votos sea menor o igual (<=) al valor especificado.


*/
