async function* fetchAPI(url) {
  let nextPage = url;
  while (nextPage != null) {
    const response = await fetch(nextPage);
    const data = await response.json();
    yield data.results;
    nextPage = data.next;
  }
}

const API_URL = "https://swapi.dev/api/people/";

(async () => {
  for await (const results of fetchAPI(API_URL)) {
    console.log(results);
  }
})();

// Alternativa a la función anonima
/* 
async function fetchAndLogData() {
  for await (const results of fetchAPI(API_URL)) {
    console.log(results);
  }
}

fetchAndLogData(); 
*/

