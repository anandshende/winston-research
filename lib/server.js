const express = require('./express-app');
const http = require('http');
const logger = require('./logger');

const PORT = 2000;

const server = http.createServer(express);

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);

    var count = 0;
    setInterval(() => {
        logger.info(`Logger Message ${count}`);
        logger.debug(`Logger Message ${count}`);
        logger.error(`Logger Message ${count}`);
        logger.warn(`Logger Message ${count}`);
        count += 1;
    }, 2000);
});