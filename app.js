// Fichier d'entrée par défaut pour certains hébergeurs (ex: cPanel / Phusion Passenger)
// qui cherchent un fichier app.js à la racine.
// Il charge simplement le serveur compilé.

require('./dist/server.cjs');
