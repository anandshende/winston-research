const winston = require('winston');
const { format } = require('logform');
const { Mail } = require('winston-mail');

const options = {
    format: format.combine(
        format.timestamp(),
        format.printf((info) => {
            const msg = `${info.timestamp}: ${info.level} ${info.message}`;
            return msg;
        })
    ),
    level: 'error',
    to: 'someaddr@gmail.com',
    from: 'someaddr@gmail.com',
    host: 'smtp.gmail.com',
    secure: true,
    username: 'someaddr@gmail.com',
    password: 'password',
    subject: 'Winston Mail Testing',
    html: true,
    formatter: function (info) {
        const htmlString = `
        <h3>
            Level: ${info.level}
        </h3>
        <h3>
            Message: ${info.message}
        </h3>
        <h3>
            Timestamp: ${new Date().toLocaleString()}
        </h3>
        `;

        return htmlString;
    }
}

const logger = winston.createLogger({
    transports: [
        new Mail(options)
    ]
});

module.exports = logger;