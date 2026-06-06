const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of allFiles) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's refine the CTA Final buttons
  content = content.replace(
    /<div className="flex flex-col sm:flex-row gap-6 justify-center">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/g,
    `<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/soumission" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold px-8 py-4 text-lg"
              >
                Soumission gratuite
              </Button>
            </Link>
            <a href="tel:8193231323" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold px-8 py-4 text-lg"
              >
                Appeler au 819-323-1323
              </Button>
            </a>
          </div>
        </div>
      </section>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Updated CTA buttons to just rely on primary variant.");
