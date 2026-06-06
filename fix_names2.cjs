const fs = require('fs');
const path = require('path');

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
    content = content.replace(/export const .*?: React\.FC/g, "export const " + compName + ": React.FC");
    fs.writeFileSync(p, content, 'utf8');
  }
}
