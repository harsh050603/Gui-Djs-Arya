const express = require('express');
    const app = express();
    const server = require('http').createServer(app);
    const io = require('socket.io')(server, { cors: { origin: "*"} })
    const path = require('path');
    const guiPath = path.join(__dirname, '../guistuff');
    console.log(path.join(__dirname, '../guistuff/index.html'));

    app.use(express.static(guiPath));

    server.listen(3000,() => {
        console.log(`Server is UP on port 3000`);
    })

        io.on('connection', (socket) => {
            console.log(`User Connected:` + socket.id)
            socket.emit('trial.csv');
        });