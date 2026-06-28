// Point d'entrée pour cPanel / Passenger
process.env.NODE_ENV = 'production';

const fs = require('fs');
try {
  require('./dist/server.cjs');
} catch (error) {
  fs.writeFileSync('./app-error.log', error.stack || error.toString());
  throw error;
}

process.on('uncaughtException', (err) => {
  fs.writeFileSync('./app-uncaught.log', err.stack || err.toString());
});
process.on('unhandledRejection', (reason, promise) => {
  fs.writeFileSync('./app-unhandled.log', String(reason));
});
