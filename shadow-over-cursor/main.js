const cursorSize = 280; // Tamaño del cursor en píxeles

// Crear el elemento de sombra
const cursorShadow = document.createElement('div');
cursorShadow.classList.add('cursor-shadow');
document.body.appendChild(cursorShadow);

// Ajustar el tamaño y posición inicial de la sombra
cursorShadow.style.width = `${cursorSize}px`;
cursorShadow.style.height = `${cursorSize}px`;
cursorShadow.style.opacity = '0';

document.addEventListener('mousemove', (event) => {
  const cursorX = event.clientX - cursorSize / 2;
  const cursorY = event.clientY - cursorSize / 2;

  // Ajustar la posición del cursor
  cursorShadow.style.left = cursorX + 'px';
  cursorShadow.style.top = cursorY + 'px';

  // Ajustar la posición del cursor dentro de la sombra
  const cursorCenterX = cursorX + cursorSize / 2;
  const cursorCenterY = cursorY + cursorSize / 2;
  const shadowCenterX = cursorShadow.offsetLeft + cursorSize / 2;
  const shadowCenterY = cursorShadow.offsetTop + cursorSize / 2;
  const translateX = cursorCenterX - shadowCenterX;
  const translateY = cursorCenterY - shadowCenterY;
  cursorShadow.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

document.addEventListener('mouseenter', () => {
  cursorShadow.style.opacity = '0.1';
});

document.addEventListener('mouseleave', () => {
  cursorShadow.style.opacity = '0';
});