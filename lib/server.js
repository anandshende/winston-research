const express = require('./express-app');
const http = require('http');

const PORT = 2000;

const server = http.createServer(express);

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});