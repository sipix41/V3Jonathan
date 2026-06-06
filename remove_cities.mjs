import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const citiesToRemove = [
  "Sainte-Adèle (Mont-Rolland)",
  "Saint-Antoine",
  "La Conception",
  "Lac Raymond",
  "Lafontaine",
  "Amherst"
];

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const city of citiesToRemove) {
    if(content.includes('"' + city + '"')) {
      const parts = content.split('"' + city + '",');
      content = parts.join('');
      const parts2 = content.split('"' + city + '"');
      content = parts2.join('');
      changed = true;
    }
  }

  // clean up extra commas or empty spaces might be left
  if (changed) {
    // some elements could now be empty lines.
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/\[\s*,/g, '[');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Removed cities from " + file);
  }
}
