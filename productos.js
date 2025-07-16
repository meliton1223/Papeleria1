// Mostrar mensaje al cargar la página
window.onload = function () {
  alert("¡Bienvenido a nuestra tienda! 🛒 Elige tus productos favoritos.");
};

let total = 0;
const carrito = document.getElementById('carrito');
const totalSpan = document.getElementById('total');

// Seleccionar todos los botones con clase 'agregar'
const botones = document.querySelectorAll('.agregar');

// Agregar evento a cada botón
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const nombre = boton.dataset.nombre;
    const precio = parseFloat(boton.dataset.precio);

    // Agregar producto al carrito
    const item = document.createElement('li');
    item.textContent = ${nombre} - $${precio};
    carrito.appendChild(item);

    // Sumar al total
    total += precio;
    totalSpan.textContent = total;
  });
});
