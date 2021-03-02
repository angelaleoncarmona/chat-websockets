// Importamos WebSockets
const WebSocket = require('ws');

// Creamos el servidor
const wss = new WebSocket.Server({ port: 8080 });

// Escuchamos los eventos de conexión
wss.on('connection', function connection(ws) {
    // Escuchamos los mensajes entrarntes
    ws.on('message', function incoming(data) {
        // Iteramos todos los clientes que se encuentren conectados
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                // Enviamos la información recibida
                client.send(data);
            }
        });
    });
});