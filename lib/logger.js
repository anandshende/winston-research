const winston = require('winston');
const { format } = require('logform');

const options = {
    format: format.combine(
        format.timestamp(),
        format.colorize({
            colors: {
                info: 'white',
                debug: 'green',
                error: 'red',
                warn: 'yellow'
            },
            all: true
        }),
        format.printf((info) => {
            return `${info.timestamp}: ${info.level} ${info.message}`;
        })
    ),
    level: 'silly'
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(options)
    ]
});

module.exports = logger;