
const WebSocketServer = require('ws').Server;

let wss = new WebSocketServer({port: 8080});
console.log('开启webSocket服务端口:', 8080);

wss.on('connection', (ws) => {
    console.log('建立webSocket链接')
    ws.on('message', (data) => {
        console.log('收到客户端返回的消息', data.toString());
        ws.send('hello webSocket')
    })
})