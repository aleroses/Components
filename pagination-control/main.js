const itemsPerPage = 5; // Número de elementos por página
const totalPages = 20; // Número total de páginas
const colors = ["red", "blue", "green", "yellow", "purple"]; // Colores para la caja

const paginationContainer = document.getElementById("pagination");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const pageNumbersContainer = document.getElementById("pageNumbers");
const colorBox = document.getElementById("colorBox");

let currentPage = 1;

function displayData(page) {
  // Aquí puedes actualizar tu UI con los datos de la página actual
  const color = colors[page - 1];
  colorBox.style.backgroundColor = color;
}

function generatePageNumbers() {
  pageNumbersContainer.innerHTML = "";

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageNumber = document.createElement("div");
    pageNumber.textContent = i;
    pageNumber.classList.add("pageNumber");

    if (i === currentPage) {
      pageNumber.classList.add("active");
    }

    pageNumber.addEventListener("click", () => {
      currentPage = i;
      displayData(currentPage);
      generatePageNumbers();
    });

    pageNumbersContainer.appendChild(pageNumber);
  }
}

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayData(currentPage);
    generatePageNumbers();
  }
});

nextPageBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayData(currentPage);
    generatePageNumbers();
  }
});

// Inicializar la paginación
displayData(currentPage);
generatePageNumbers();
