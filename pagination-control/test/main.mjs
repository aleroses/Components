// Total visible pages: 5

const pagination = document.querySelector(".pagination");
const colorBox = document.querySelector(".colorBox");
const container = document.querySelector(".container");
const leftBtn = document.querySelector(".prevPageBtn");
const pageNumbers = document.querySelector(".pageNumbers");
const rightBtn = document.querySelector(".nextPageBtn");

const totalPages = 150;
let currentPage = 1;

const colors = ["#211951", "#836FFF", "#15F5BA", "#F0F3FF", "#F9F07A"];

const showColor = (page) => {
  const color = colors[page - 1];

  colorBox.style.backgroundColor = color;
};

const generatePageNumbers = () => {
  pageNumbers.innerHTML = "";

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageNumber = document.createElement("div");
    pageNumber.classList.add("pageNumber");

    pageNumber.textContent = i;

    if (i === currentPage) {
      pageNumber.classList.add("active");
    }

    pageNumber.addEventListener("click", () => {
      currentPage = i;

      showColor(currentPage);
      generatePageNumbers();
    });

    pageNumbers.append(pageNumber);
  }
};

leftBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;

    showColor(currentPage);
    generatePageNumbers();
  }
});

rightBtn.addEventListener("click", () => {
  if (totalPages > currentPage) {
    currentPage++;

    showColor(currentPage);
    generatePageNumbers();
  }
});

showColor(currentPage);
generatePageNumbers();
