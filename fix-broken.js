import fs from 'fs';
import path from 'path';

function fixBrokenImages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      fixBrokenImages(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix `/ width="800" height="600">` and replace it with ` width="800" height="600" />`
      if (content.includes('/ width="800"')) {
        content = content.replace(/\/\s*width="800"\s*height="600">/g, 'width="800" height="600" />');
        content = content.replace(/\/\s*width="800"\s*height="600" \/>/g, 'width="800" height="600" />');
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed images in ${fullPath}`);
      }
    }
  }
}

fixBrokenImages(path.join(process.cwd(), 'pages'));
fixBrokenImages(path.join(process.cwd(), 'components'));
