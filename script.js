// Mensaje al cargar la página
window.onload = function () {
  alert("¡Bienvenido a Papelería Lapicito! 🖍️✨");
};

// Botón de PRODUCTOS
document.getElementById('btnProductos').addEventListener('click', function () {
  alert('¡Estos son nuestros productos más lindos! 🎨📎✏️');
});



// Cerrar mensaje de bienvenida
document.getElementById('cerrarMensaje').addEventListener('click', function () {
  document.querySelector('.mensaje-bienvenida').style.display = 'none';
});