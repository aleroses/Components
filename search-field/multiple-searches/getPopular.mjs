import { autorization } from "./autorization.mjs";

const getPopular = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: autorization,
      },
    }
  );
  const data = await response.json();

  console.log(data);
  return data;
};

export { getPopular };
