const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const fs   = require('fs');
const path = require('path');

const env    = process.env.NODE_ENV || 'development';
const logDir = 'log';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
    filename    : `${logDir}/%DATE%-sfc-backend.log`,
    datePattern : 'YYYY-MM-DD'
});

const logger = createLogger({
    //level  : env === 'development' ? 'verbose' : 'info',
    level  : env === 'development' ? 'debug' : 'info',
    format : format.combine(
      format.label({ label: path.basename(process.mainModule.filename) }),  
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)
    ),
    transports: [
      
      new transports.Console({
        level  : 'debug',
        format : format.combine(
          format.colorize(),
          format.printf(
            info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
          )
        )
      }),
      
      dailyRotateFileTransport
    ]
  });

  module.exports = logger;
