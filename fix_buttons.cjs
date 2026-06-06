const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of allFiles) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Buttons container in CTA Final
  content = content.replace(
    /<div className="flex flex-col sm:flex-row gap-6 justify-center">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/g,
    `<div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/soumission">
              <Button
                size="lg"
                variant="primary"
                className="w-full md:w-auto font-bold tracking-wide px-10 py-5 text-lg shadow-lg hover:-translate-y-1 transition-transform"
              >
                Demander une soumission
              </Button>
            </Link>
            <a href="tel:8193236665">
              <Button
                size="lg"
                variant="primary"
                className="w-full md:w-auto font-bold tracking-wide px-10 py-5 text-lg shadow-lg hover:-translate-y-1 transition-transform"
              >
                Appeler le (819) 323-6665
              </Button>
            </a>
          </div>
        </div>
      </section>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
