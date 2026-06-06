const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const f of files) {
  const filePath = path.join(pagesDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace CTA container
  content = content.replace(
    /className="relative z-10 max-w-4xl mx-auto px-4 text-center"/g,
    'className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"'
  );

  // Note: some files might have different container classes, let's catch them
  content = content.replace(
    /className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"/g,
    'className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"'
  );

  // Replace text-4xl md:text-5xl font-black text-white mb-6 tracking-tight
  content = content.replace(
    /className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"/g,
    'className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight"'
  );
  
  // They also have text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight
  content = content.replace(
    /className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight"/g,
    'className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight"'
  );

  // Replace paragraph: text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium
  content = content.replace(
    /className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium"/g,
    'className="text-lg md:text-xl text-red-100 mb-10 font-medium"'
  );
  
  // text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto
  content = content.replace(
    /className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto"/g,
    'className="text-lg md:text-xl text-red-100 mb-8 font-medium"'
  );

  // text-lg text-red-100 mb-10 max-w-2xl mx-auto font-medium
  content = content.replace(
    /className="text-lg text-red-100 mb-10 max-w-2xl mx-auto font-medium"/g,
    'className="text-lg md:text-xl text-red-100 mb-10 font-medium"'
  );

  // Link flex container: flex flex-col sm:flex-row gap-6 justify-center
  content = content.replace(
    /className="flex flex-col sm:flex-row gap-6 justify-center"/g,
    'className="flex flex-col sm:flex-row gap-6"'
  );
  // flex flex-col sm:flex-row gap-4 justify-center
  content = content.replace(
    /className="flex flex-col sm:flex-row gap-4 justify-center"/g,
    'className="flex flex-col sm:flex-row gap-4"'
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log("Replaced styles.");
