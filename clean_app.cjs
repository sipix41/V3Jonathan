const fs = require('fs');

const appPath = require('path').join(process.cwd(), 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// The lines 98 and 182 have a bunch of concatenated \n literals. Let's fix them.
appContent = appContent.replace(/\\\\n/g, '\\n'); // this shouldn't be needed actually. Let's just do a clean pass.

// Delete any lines containing 'rndel', 'elleeille', 'antier', 'ontlympia', 'aintdolpheoward', 'aintolomban', 'aintastinacarre', 'ainteargeriteacasson', 'ainteophie', 'alesacs', 'entworthord'
const brokenNames = ['rndel', 'elleeille', 'antier', 'ontlympia', 'aintdolpheoward', 'aintolomban', 'aintastinacarre', 'ainteargeriteacasson', 'ainteophie', 'alesacs', 'entworthord'];

// Since they are on one line, we should split the file by '\n' (real newline), check for those. Oh wait, it's literal `\n` in the text.
// Let's replace the literal \n with real newline first.
appContent = appContent.replace(/\\\\n/g, '\\n');

let lines = appContent.split('\\n');
lines = lines.filter(line => !brokenNames.some(name => line.includes(name)));

fs.writeFileSync(appPath, lines.join('\\n'), 'utf8');
