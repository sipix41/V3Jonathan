const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith(".tsx")) { 
      results.push(file);
    }
  });
  return results;
}

const files = walk("./pages").concat(walk("./components")).concat(walk("./src"));
let modifiedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const imgRegex = /<img([\s\S]*?)>/g;
  let changed = false;
  
  content = content.replace(imgRegex, (match, inner) => {
    if (!inner.includes("width=") && !inner.includes("height=")) {
      changed = true;
      let newInner = inner;
      if (newInner.endsWith("/")) {
        newInner = newInner.slice(0, -1) + ' width="800" height="600" /';
      } else {
        newInner = newInner + ' width="800" height="600"';
      }
      return `<img${newInner}>`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Modified ${modifiedCount} files`);
