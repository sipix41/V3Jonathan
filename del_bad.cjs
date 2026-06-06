const fs = require('fs');
const path = require('path');

const badFiles = [
  "Arndel.tsx", "Belleeille.tsx", "Lantier.tsx", "MontOlympia.tsx", "SaintAdolpheDhoward.tsx", 
  "SaintColomban.tsx", "SaintAstinLacCarre.tsx", "SainteMargeriteDLacMasson.tsx", 
  "SainteSophie.tsx", "ValDesLacs.tsx", "WentworthNord.tsx"
];

const pagesDir = path.join(process.cwd(), 'pages');
for (const file of badFiles) {
  const fp = path.join(pagesDir, file);
  if (fs.existsSync(fp)) {
    fs.unlinkSync(fp);
  }
}
