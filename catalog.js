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
  const link = document.createElement("a");
  link.className = "card";
  link.href = `./${item.path}`;

  const title = document.createElement("span");
  title.className = "card-title";
  title.textContent = item.title;
  link.append(title);

  if (item.group === "Apps") {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "Necesita build";
    link.append(badge);
  }

  const path = document.createElement("span");
  path.className = "card-path";
  path.textContent = item.path;
  link.append(path);

  return link;
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
