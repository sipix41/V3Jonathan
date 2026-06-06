const fs = require('fs');
const path = require('path');

const appPath = path.join(process.cwd(), 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// remove bad lazy
const badLazys = [
  "Arndel", "Belleeille", "Lantier", "MontOlympia", "SaintAdolpheDhoward", 
  "SaintColomban", "SaintAstinLacCarre", "SainteMargeriteDLacMasson", 
  "SainteSophie", "ValDesLacs", "WentworthNord"
];

for(const bad of badLazys) {
  appContent = appContent.replace(new RegExp("const " + bad + " = React\\.lazy\\(\\(.*?\\n", "g"), "");
  appContent = appContent.replace(new RegExp(".*<Route.*" + bad + ".*\\n", "g"), "");
}

fs.writeFileSync(appPath, appContent, 'utf8');
