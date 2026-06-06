const fs = require('fs');
const path = require('path');

const badFiles = [
  "rndel.tsx", "elleeille.tsx", "antier.tsx", "ontlympia.tsx", "aintdolpheoward.tsx", 
  "aintolomban.tsx", "aintastinacarre.tsx", "ainteargeriteacasson.tsx", 
  "ainteophie.tsx", "alesacs.tsx", "entworthord.tsx"
];

for(const f of badFiles) {
  const p = path.join(process.cwd(), 'pages', f);
  if(fs.existsSync(p)) fs.unlinkSync(p);
}

// FIX MONT-OLYMPIA issue because city names were directly replaced instead of components
const newCities = [
  "Arundel", "Bellefeuille", "Lantier", "Mont-Olympia", "Saint-Adolphe-d'Howard", 
  "Saint-Colomban", "Saint-Faustin-Lac-Carré", "Sainte-Marguerite-du-Lac-Masson", 
  "Sainte-Sophie", "Val-des-Lacs", "Wentworth-Nord"
];

function getComponentName(name) {
  return name.replace(/[- ']/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('').replace(/É/g, 'E').replace(/é/g, 'e').replace(/Dhoward/g, 'DHoward').replace(/Carre/g, 'Carre').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');
}

const pagesDir = path.join(process.cwd(), 'pages');

for (const city of newCities) {
  const compName = getComponentName(city);
  const fileName = compName + '.tsx';
  
  const p = path.join(pagesDir, fileName);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    // Find "export const NAME: React.FC"
    content = content.replace(/export const .*?: React\.FC/g, "export const " + compName + ": React.FC");
    fs.writeFileSync(p, content, 'utf8');
  }
}

