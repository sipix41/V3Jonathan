import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('AAmherst')) {
    content = content.replace(/AAmherst/g, 'Amherst');
    changed = true;
  }
  if (content.includes('aAmherstloise')) {
    content = content.replace(/aAmherstloise/g, 'amherstloise');
    changed = true;
  }
  if (content.includes('/aAmherst')) {
    content = content.replace(/\/aAmherst/g, '/amherst');
    changed = true;
  }
  // Are there other cities with similar duplication? Like AArrundel? AArundel?
  if (content.includes('AArundel')) {
    content = content.replace(/AArundel/g, 'Arundel');
    changed = true;
  }
  if (content.match(/[A-Z][A-Z][a-z]+/)) {
     // potential typos like MMirabel
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed typos in ${file}`);
  }
}
