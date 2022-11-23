const { Client,LocalAuth  } = require('whatsapp-web.js');

salida = [];

module.exports = {
    createClient: function (name){
        const client = new Client({
            authStrategy: new LocalAuth({ clientId: name }), 
            puppeteer: {
                args: ['--no-sandbox','--disable-setuid-sandbox'],
            }
        });
        return client;
    },
    initclient: function (client){
        client.initialize();
    }
};
