const express = require('express');
const qrcode =  require('qrcode');
const router = express.Router();
const whatsapp = require('../lib/whatsapp');
let clientes = [];
let salida = [];

function viewState (client,id){
    if(typeof client == 'undefined'){
        salida[id] = 'undefined';
        return salida[id];
    }else{
        client.on("qr", async qr =>{
            salida[id] = await qrcode.toDataURL(qr);
            return salida[id];
        });
        client.on("ready", () =>{
            salida[id] = "ready";
            return salida[id];
        });
        client.on("disconnected", () =>{
            salida[id] = "disconnected";
            client.destroy();
            return salida[id];
        });
    }
    
}

router.get('/state:id', (req, res) => {
    const { id } = req.params;
    //console.log(clientes[id].info);
    state = viewState(clientes[id],id);
    if(state == "undefined"){
        res.redirect("/init"+id);
    }
    res.send(salida[id]);
});

router.get('/init:id', async (req, res) => {
    const { id } = req.params;
    client = await whatsapp.createClient(id);
    clientes[id] = client;
    salida[id] = "espere";
    res.redirect("/start"+id);

});
router.get('/start:id',(req, res) => {
    const { id } = req.params;
    whatsapp.initclient(clientes[id]);
    res.redirect("/state"+id);
});


module.exports = router;