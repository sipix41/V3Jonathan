// Fichier d'entrée par défaut pour certains hébergeurs (ex: cPanel / Phusion Passenger)
// qui cherchent un fichier app.js à la racine.
// Il charge simplement le serveur compilé.

import('./dist/server.cjs').catch(error => {
  console.error("Erreur critique: Le fichier dist/server.cjs n'a pas pu être chargé.");
  console.error("Avez-vous bien exécuté la commande 'npm run build' ?");
  console.error(error);
  process.exit(1);
});
