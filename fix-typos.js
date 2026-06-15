import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace: "des bâtiments [a-zA-Z\-\{\}]+lois." with "des bâtiments de la région."
  const modified = content.replace(/l'enveloppe extérieure des bâtiments [a-zA-Z0-9\-\{\}]+lois\./g, 
    "l'enveloppe extérieure des bâtiments de la municipalité.");
    
  if (modified !== content) {
    fs.writeFileSync(filePath, modified, 'utf8');
    console.log(`Fixed typo in ${file}`);
  }
}
