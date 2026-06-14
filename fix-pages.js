import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('819-323-6665') || content.includes('8193236665')) {
    // Replace telephone string literal
    content = content.replace(/"tel:8193236665"/g, '{`tel:${COMPANY_INFO.phoneClean}`}');
    content = content.replace(/'tel:8193236665'/g, '{`tel:${COMPANY_INFO.phoneClean}`}');
    content = content.replace(/tel:8193236665/g, 'tel:${COMPANY_INFO.phoneClean}');
    content = content.replace(/"819-323-6665"/g, 'COMPANY_INFO.phone');
    content = content.replace(/819-323-6665/g, '{COMPANY_INFO.phone}');
    
    // Check if the file imports COMPANY_INFO
    if (!content.includes('COMPANY_INFO')) {
      content = `import { COMPANY_INFO } from '../constants';\n` + content;
    }
    
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
