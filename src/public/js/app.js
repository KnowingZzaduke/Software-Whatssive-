//Varibales de la página principal
const toggleHamburguesaPp = document.querySelector('.hamburguesa');
const toggleCerrarPp = document.querySelector('.cerrar');
//Variables de la página de bienvenida
const toggleHamburguesaPb = document.querySelector('.abrir');
const toggleCerrarPb = document.querySelector('.cerrar');
const menuDesplegablePb = document.querySelector('.content_menu-desplegable');
const toggleDesplegar = document.querySelector('.desplegar');
const toggleContraer = document.querySelector('.contraer');
const contentDesplegar = document.querySelector('.content_desplegable');

//FUNCIONES DE LA PÁGINA PRINCIPAL

//Función abrir
toggleHamburguesaPp.addEventListener('click', function(){
    menuDesplegablePb.style.display = ('block')
})

//FUNCIONES DE PÁGINA DE BIENVENIDA
//Función para abrir
toggleHamburguesaPb.addEventListener('click', function(){
    menuDesplegablePb.style.display = ('block');
})

//Función para cerrar
toggleCerrarPb.addEventListener('click', function(){
    menuDesplegablePb.style.display =  ('none');
})

//Función desplegar
toggleDesplegar.addEventListener('click', function(){
    contentDesplegar.style.display = ('block');
    toggleDesplegar.style.display = ('none');
    toggleContraer.style.display = ('block');
});

//Función para contraer
toggleContraer.addEventListener('click', function(){
    toggleContraer.style.display = ('none');
    toggleDesplegar.style.display = ('block');
    contentDesplegar.style.display = ('none');
})