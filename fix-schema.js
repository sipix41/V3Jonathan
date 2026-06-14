import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'pages');
const cities = [
  'Amherst', 'Arundel', 'Bellefeuille', 'Esterel', 'LacSuperieur', 'Lantier',
  'Laurentides', 'MilleIsles', 'Mirabel', 'MontBlanc', 'MontOlympia', 'MontTremblant',
  'MorinHeights', 'Piedmont', 'Prevost', 'SaintAdolpheDHoward', 'SaintColomban',
  'SaintFaustinLacCarre', 'SaintHippolyte', 'SaintJerome', 'SainteAdele',
  'SainteAgatheDesMonts', 'SainteAnneDesLacs', 'SainteLucieDesLaurentides',
  'SainteMargueriteDuLacMasson', 'SainteSophie', 'ValDavid', 'ValDesLacs',
  'ValMorin', 'WentworthNord'
];

for (const city of cities) {
  const filePath = path.join(pagesDir, `${city}.tsx`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const cityNameMatch = content.match(/"@type": "City",\s*"name": "([^"]+)"/);
  if (cityNameMatch) {
    const cityName = cityNameMatch[1];
    
    // Check if hasn't been updated with hasOfferCatalog
    if (!content.includes('"hasOfferCatalog"')) {
      const additionalSchema = `,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de toiture à ${cityName}",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installation de bardeaux d'asphalte"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Réparation de toiture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Déneigement de toiture"
            }
          }
        ]
      }`;
      
      content = content.replace(
        /("description": "[^"]*?")\s*}/g, 
        `$1${additionalSchema}\n    }`
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Schema in ${city}.tsx`);
  }
}
