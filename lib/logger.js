const winston = require('winston');
const { format } = require('logform');
require('winston-daily-rotate-file');

const fileOptions = {
    format: format.combine(
        format.timestamp(),
        format.printf((info) => {
            return `${info.timestamp}: ${info.level} ${info.message}`;
        })
    ),
    level: 'silly',
    filename: 'log-file.log'
};

const dailyFileOptions = {
    format: format.combine(
        format.timestamp(),
        format.printf((info) => {
            return `${info.timestamp}: ${info.level} ${info.message}`;
        })
    ),
    level: 'silly',
    filename: 'daily-log-file-%DATE%.log'
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.File(fileOptions),
        new winston.transports.DailyRotateFile(dailyFileOptions)
    ]
});

module.exports = logger;