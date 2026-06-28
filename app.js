// Point d'entrée pour cPanel / Passenger
process.env.NODE_ENV = 'production';
import('./dist/server.cjs').catch(console.error);
