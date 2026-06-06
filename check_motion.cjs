const fs = require('fs');
const pagesDir = require('path').join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of allFiles) {
  const content = fs.readFileSync(require('path').join(pagesDir, file), 'utf8');
  const openCount = (content.match(/<motion\.div/g) || []).length;
  const closeCount = (content.match(/<\/motion\.div>/g) || []).length;
  if (openCount !== closeCount) {
    console.log(file, 'mismatch', openCount, closeCount);
  }
}
