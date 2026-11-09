const groupOrder = [
  "Navegación",
  "Contenido",
  "Carruseles",
  "Efectos",
  "Interacción",
  "Apps",
];

const catalog = document.querySelector("#catalog");
const groupsNav = document.querySelector("#groups");
const count = document.querySelector("#count");
const preview = document.querySelector("#preview");
const previewEmpty = document.querySelector("#preview-empty");
const previewPanel = document.querySelector("#preview-panel");
const previewTitle = document.querySelector("#preview-title");
const previewMeta = document.querySelector("#preview-meta");
const previewOpen = document.querySelector("#preview-open");
const previewClose = document.querySelector("#preview-close");
const previewBackdrop = document.querySelector("#preview-backdrop");
const previewFrame = document.querySelector("#preview-frame");
const mobileQuery = window.matchMedia("(max-width: 800px)");
let currentItem = null;
const themeButton = document.querySelector("#theme");
const toTop = document.querySelector("#to-top");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  themeButton.textContent = dark ? "Modo claro" : "Modo oscuro";
  themeButton.setAttribute("aria-pressed", String(dark));
}

themeButton.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("catalog-theme", next);
  } catch (error) {
    // The theme still changes for this visit when storage is blocked.
  }
  applyTheme(next);
});

applyTheme(document.documentElement.dataset.theme || "light");

function openModal() {
  preview.classList.add("is-modal");
  previewBackdrop.hidden = false;
  document.body.classList.add("preview-open");
}

function closeModal() {
  preview.classList.remove("is-modal");
  previewBackdrop.hidden = true;
  document.body.classList.remove("preview-open");
  if (!mobileQuery.matches || !currentItem) return;
  previewFrame.src = "about:blank";
  history.replaceState(null, "", location.pathname + location.search);
}

previewClose.addEventListener("click", closeModal);
previewBackdrop.addEventListener("click", closeModal);

function syncToTop() {
  toTop.hidden = window.scrollY < 480;
}

toTop.addEventListener("click", () => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
});

window.addEventListener("scroll", syncToTop, { passive: true });
syncToTop();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && preview.classList.contains("is-modal")) {
    closeModal();
  }
});

mobileQuery.addEventListener("change", () => {
  if (!currentItem) return;
  if (mobileQuery.matches) {
    closeModal();
    return;
  }
  preview.classList.remove("is-modal");
  previewBackdrop.hidden = true;
  document.body.classList.remove("preview-open");
  previewFrame.src = `./${currentItem.path}`;
  previewEmpty.hidden = true;
  previewPanel.hidden = false;
});

function slug(group) {
  return group
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function orderedGroups(items) {
  const known = groupOrder.filter((group) =>
    items.some((item) => item.group === group)
  );
  const extra = [
    ...new Set(
      items
        .map((item) => item.group)
        .filter((group) => !groupOrder.includes(group))
    ),
  ];
  return [...known, ...extra];
}

function card(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card";
  button.dataset.path = item.path;
  button.addEventListener("click", () => select(item));

  const title = document.createElement("span");
  title.className = "card-title";
  title.textContent = item.title;
  button.append(title);

  const path = document.createElement("span");
  path.className = "card-path";
  path.textContent = item.path;
  button.append(path);

  return button;
}

function pathFromHash() {
  const raw = location.hash.slice(1);
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return "";
  }
}

function select(item) {
  for (const selected of catalog.querySelectorAll(".card.is-selected")) {
    selected.classList.remove("is-selected");
    selected.removeAttribute("aria-pressed");
  }

  const button = catalog.querySelector(
    `.card[data-path="${CSS.escape(item.path)}"]`
  );
  button?.classList.add("is-selected");
  button?.setAttribute("aria-pressed", "true");

  currentItem = item;
  previewTitle.textContent = item.title;
  previewMeta.textContent = `${item.group} · ${item.path}`;
  previewOpen.href = `./${item.path}`;
  previewFrame.src = `./${item.path}`;
  previewFrame.title = item.title;
  previewEmpty.hidden = true;
  previewPanel.hidden = false;
  if (mobileQuery.matches) openModal();
  else closeModal();
  history.replaceState(null, "", `#${encodeURIComponent(item.path)}`);
}

function render(items) {
  count.textContent = `${items.length} demos`;
  catalog.replaceChildren();
  groupsNav.replaceChildren();

  for (const group of orderedGroups(items)) {
    const id = slug(group);
    const jump = document.createElement("a");
    jump.href = `#${id}`;
    jump.textContent = group;
    jump.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    groupsNav.append(jump);

    const section = document.createElement("section");
    section.className = "group";
    section.id = id;

    const heading = document.createElement("h2");
    heading.textContent = group;

    const cards = document.createElement("div");
    cards.className = "cards";
    for (const item of items.filter((entry) => entry.group === group)) {
      cards.append(card(item));
    }

    section.append(heading, cards);
    catalog.append(section);
  }

  const current = items.find((item) => item.path === pathFromHash());
  if (current) select(current);
}

function showMessage(text) {
  count.textContent = "";
  const message = document.createElement("p");
  message.className = "message";
  message.textContent = text;
  catalog.replaceChildren(message);
}

try {
  const response = await fetch("./catalog.json");
  if (!response.ok) {
    throw new Error(String(response.status));
  }
  const items = await response.json();
  render(items);
} catch {
  showMessage(
    "No se pudo leer catalog.json. Abre esta carpeta con un servidor estático."
  );
}
