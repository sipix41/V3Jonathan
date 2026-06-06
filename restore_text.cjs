const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of allFiles) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Restore the text in the CTA section
  content = content.replace(
    />\s*Demander une soumission\s*<\/Button>/g,
    '>\n                Soumission gratuite\n              </Button>'
  );

  content = content.replace(
    />\s*Appeler le \(819\) 323-6665\s*<\/Button>/g,
    '>\n                Appeler au 819-323-1323\n              </Button>'
  );
  
  content = content.replace(
    /<a href="tel:8193236665">/g,
    '<a href="tel:8193231323">'
  );

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Restored CTA text.");
