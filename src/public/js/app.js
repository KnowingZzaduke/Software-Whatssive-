const toggleAbrir = document.querySelector('.hamburguesa');
const toggleCerrar = document.querySelector('.cerrar');
const menuDesplegable = document.querySelector('.content_menu-desplegable');

//Abrir Menú
toggleAbrir.addEventListener('click', function(e){
    if(e){
        menuDesplegable.style.display = ('block');
    }
});

toggleCerrar.addEventListener('click', function(e){
    if(e){
        menuDesplegable.style.display = ('none');
    }
});

