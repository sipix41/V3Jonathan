const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const searchString = "Prêt à protéger";
let count = 0;

for (const f of allFiles) {
  const content = fs.readFileSync(path.join(pagesDir, f), 'utf8');
  if (content.includes(searchString)) {
    count++;
  }
}

console.log("Files containing the CTA:", count);
