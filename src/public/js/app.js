//Varibales de la página principal
const toggleHamburguesaPp = document.querySelector('.hamburguesa');
const toggleCerrarPp = document.querySelector('.x')
const menuDesplegablePp = document.querySelector('.content_menu-desplegable-header');

//Variables de la página de bienvenida
const toggleHamburguesa = document.querySelector('.abrir');
const toggleCerrar = document.querySelector('.cerrar');
const menuDesplegable = document.querySelector('.content_menu-desplegable');
const toggleDesplegar = document.querySelector('.desplegar');
const toggleContraer = document.querySelector('.contraer');
const contentDesplegar = document.querySelector('.content_desplegable');


//FUNCIONES DE LA PÁGINA PRINCIPAL
//Función abrir
toggleCerrarPp.addEventListener('click', function(){
    menuDesplegablePp.style.display = ('block');
})


//FUNCIONES DE PÁGINA DE BIENVENIDA
//Función para abrir
toggleHamburguesa.addEventListener('click', function(){
    menuDesplegable.style.display = ('block');
})

//Función para cerrar
toggleCerrar.addEventListener('click', function(){
    menuDesplegable.style.display =  ('none');
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