import fs from 'fs';
import path from 'path';

function fixImagesInDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      fixImagesInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<img')) {
        // Find <img> tags and add loading and decoding attributes if not present
        const origContent = content;
        content = content.replace(/<img([\s\S]*?)>/g, (match, p1) => {
          if (!p1.includes('loading=')) {
           p1 += ' loading="lazy" decoding="async"';
          }
          if (!p1.includes('width=')) {
            p1 += ' width="800" height="600"';
          }
          let modified = `<img${p1}>`;
          
          if (modified.includes('className="') && !modified.includes('h-auto')) {
             modified = modified.replace(/className="([^"]*)"/g, (m, c1) => {
               if(!c1.includes("w-full")) c1 += " w-full";
               if(!c1.includes("h-auto")) c1 += " h-auto";
               return `className="${c1}"`;
             });
          }
          return modified;
        });
        if (content !== origContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated images in ${fullPath}`);
        }
      }
    }
  }
}

fixImagesInDir(path.join(process.cwd(), 'pages'));
fixImagesInDir(path.join(process.cwd(), 'components'));
