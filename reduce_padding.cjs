const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'pages');
const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of allFiles) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let newContent = content.replace(
    /<section className="py-16 lg:py-20 bg-white border-t-\[12px\] border-brand-red">/g,
    '<section className="py-6 lg:py-8 bg-white border-t-[8px] border-brand-red">'
  );
  
  if (newContent !== content) {
    newContent = newContent.replace(
      /className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-6 tracking-tight"/g,
      'className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-2 tracking-tight"'
    );
    newContent = newContent.replace(
      /className="text-lg md:text-xl text-gray-600 mb-10 font-medium"/g,
      'className="text-base md:text-lg text-gray-600 mb-4 font-medium"'
    );
    newContent = newContent.replace(
      /className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"/g,
      'className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"'
    );
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}
console.log("Padding reduced.");
