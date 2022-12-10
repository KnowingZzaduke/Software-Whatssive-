const btnInstancia = document.querySelector('.content_button-agregar-instancia button');
const modalInstancia = document.querySelector('.content_modal-confirmar-instancia-ocultar');
const cerrarModal = document.querySelector('.cerrar')
const btnCerrar = document.querySelector('.boton_cerrar')
//Función motrar modal
btnInstancia.addEventListener('click', function(){
    modalInstancia.classList.replace('content_modal-confirmar-instancia-ocultar', 'content_modal-confirmar-instancia-mostrar');
})


//Función cerrar modal
cerrarModal.addEventListener('click', function(){
    modalInstancia.classList.replace('content_modal-confirmar-instancia-mostrar', 'content_modal-confirmar-instancia-ocultar');
})

btnCerrar.addEventListener('click', function(){
    modalInstancia.classList.replace('content_modal-confirmar-instancia-mostrar', 'content_modal-confirmar-instancia-ocultar');
})