const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('cerrar')
const contenido = document.querySelector('.contenido')

abrir.addEventListener('click', () => contenido.classList.add('show-nav'))

cerrar.addEventListener('click', () => contenido.classList.remove('show-nav'))