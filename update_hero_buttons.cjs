const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of allFiles) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's make sure the Hero Buttons look good and Link wraps correctly
  content = content.replace(
    /<Link to="\/soumission">\s*<Button\s*size="lg"\s*className="w-full sm:w-auto/g,
    '<Link to="/soumission" className="w-full sm:w-auto block">\n                <Button\n                  size="lg"\n                  className="w-full'
  );

  content = content.replace(
    /<a href={`tel:\${COMPANY_INFO.phoneClean}`}>/g,
    '<a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">'
  );

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Updated Hero buttons");
