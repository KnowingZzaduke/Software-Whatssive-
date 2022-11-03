let fondo = false;
$('#qrcode').css('display', 'none');
function iniciar(){
    $.get( "/init3")
    .done(function( datos ) {
        $('#info').append("espera");
        
        let hola = setInterval(`viewstate()`,1000);
    })
}
function viewstate(){
   
    $.get( "/state3")
    .done(function( datos ) {
        if(datos == 'ready' || datos == 'disconnected'){
            $('#qrcode').css('display', 'none');
            $('#qrcode').empty();
            fondo = false;
            //clearInterval(hola);
            $('#info').empty();
            $('#info').append(datos);
        }else if(datos == 'espere'){
            $('#qrcode').css('display', 'none');
            fondo = false;
            $('#info').empty();
            $('#info').append('porfavor espera...');
        }else{
            if(fondo == false){
                $('#info').empty();
                $('#info').append('inicia sesion con tu whatsapp');
                $('#qrcode').css('display', 'block');
                $('#qrcode').append('<img id="whatsappico" src="img/icons8-whatsapp-48.png" alt="">');
                fondo = true;
            }
            
            $('#qrcode').css('background-image', 'url('+datos+')');
        }
        
    })
}