async function* getResults() {
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRjZWZhYzNhM2QyMzRjNThlZjQ2OTAzY2U3ZWJkMyIsInN1YiI6IjY1NjIxMjMyYTZjMTA0MDBmZWIwYjc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w49IQG4OZJuFx_It37mXvTWZtbyWPFHotHB0yEA2dP0",
        },
      }
    );
    const data = await response.json();
    yield data;
    page++;
  }
}

const loadMoreButton = document.getElementById("loadMoreButton");
const resultsList = document.getElementById("resultsList");

const resultsGenerator = getResults();

loadMoreButton.addEventListener("click", async () => {
  const { value, done } = await resultsGenerator.next();
  console.log("value", value, "done", done);

  if (!done) {
    const { results } = value;

    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result.title;
      resultsList.append(li);
    });
  } else {
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "No hay más resultados";
  }
});

/* function getResults(page) {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error(error);
      return []; // Devuelve un array vacío en caso de error
    });
}

const loadMoreButton = document.getElementById("loadMoreButton");
const resultsList = document.getElementById("resultsList");

let page = 1;

loadMoreButton.addEventListener("click", () => {
  getResults(page).then((results) => {
    if (results.length > 0) {

      results.forEach((result) => {
        const li = document.createElement("li");
        li.textContent = result.title;
        resultsList.append(li);
      });
      page++;
    } else {
      loadMoreButton.disabled = true;
      loadMoreButton.textContent = "No hay más resultados";
    }
  });
}); */
