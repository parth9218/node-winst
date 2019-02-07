const { logger } = require('./logger');


let log = logger(__filename);
log.info('Hello');
log.debug('Debugging info');