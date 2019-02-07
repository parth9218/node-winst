'use strict';
const { createLogger, format, transports } = require('winston');
const path = require('path');

module.exports.logger = caller => {
  return createLogger({
    level: 'debug',
    format: format.combine(
      format.label({ label: path.basename(caller) }),
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(
        info =>
          `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
      )
    ),
    transports: [new transports.Console()]
  });
};
