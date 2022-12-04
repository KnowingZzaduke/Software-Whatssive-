//Varibales de la página principal
const toggleHamburguesaPp = document.querySelector('.abrir_header');
const toggleCerrarPp = document.querySelector('.cerrar_header');
const menuDesplegablePp = document.querySelector('.content_menu-desplegable-header');

//FUNCIONES DE LA PÁGINA PRINCIPAL
//Función abrir
toggleHamburguesaPp.addEventListener('click', function(){
    menuDesplegablePp.style.display = ('block');
})

toggleCerrarPp.addEventListener('click', function(){
    menuDesplegablePp.style.display = ('none');
})
