const fs = require('fs');
const path = require('path');

const newCities = [ "Estérel", "Mille-Isles" ];

function getSlug(name) {
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/'/g, '').replace('les-laurentides', 'laurentides').replace('st-', 'saint-');
}

function getComponentName(name) {
  return name.replace(/[- ']/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('').replace(/É/g, 'E').replace(/é/g, 'e').replace(/Dhoward/g, 'DHoward').replace(/Carre/g, 'Carre').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const pagesDir = path.join(process.cwd(), 'pages');
const template = fs.readFileSync(path.join(pagesDir, 'Mirabel.tsx'), 'utf8');

const newSlugs = newCities.map(getSlug);

for (const city of newCities) {
  const compName = getComponentName(city);
  const fileName = compName + '.tsx';
  
  let content = template.split('Mirabel').join(city);
  content = content.split('mirabel').join(getSlug(city));
  content = content.split('mirabellois').join('locaux');
  content = content.split('mirabelloise').join('locale');
  
  content = content.replace(/export const [^:]+:\s*React\.FC/g, 'export const ' + compName + ': React.FC');
  
  fs.writeFileSync(path.join(pagesDir, fileName), content, 'utf8');
}

const appPath = path.join(process.cwd(), 'App.tsx');
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf8');
  let newLazy = "";
  let newRoutes = "";
  
  for (const city of newCities) {
    const compName = getComponentName(city);
    const slug = getSlug(city);
    newLazy += 'const ' + compName + ' = React.lazy(() => import("./pages/' + compName + '").then((module) => ({ default: module.' + compName + ' })));\n';
    newRoutes += '                <Route path="/' + slug + '" element={<' + compName + ' />} />\n';
  }
  
  appContent = appContent.replace('const Soumission = React.lazy(', newLazy + 'const Soumission = React.lazy(');
  appContent = appContent.replace('                <Route path="/realisations"', newRoutes + '                <Route path="/realisations"');
  fs.writeFileSync(appPath, appContent, 'utf8');
}

const allFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
const baseRoutes = ['sainte-agathe-des-monts', 'saint-sauveur', 'mont-tremblant', 'mont-blanc', 'piedmont', 'val-david', 'val-morin', 'sainte-adele', 'sainte-anne-des-lacs', 'prevost', 'mirabel', 'saint-jerome', 'saint-hippolyte', 'morin-heights', 'lac-superieur', 'sainte-lucie-des-laurentides', 'laurentides', 'amherst', 'arundel', 'bellefeuille', 'lantier', 'mont-olympia', 'saint-adolphe-dhoward', 'saint-colomban', 'saint-faustin-lac-carre', 'sainte-marguerite-du-lac-masson', 'sainte-sophie', 'val-des-lacs', 'wentworth-nord'];
const combinedRoutesStr = [...new Set([...baseRoutes, ...newSlugs])].map(s => "'" + s + "'").join(', ');

for (const file of allFiles) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const parts = content.split("const validRoutes = [");
  let updated = content;
  if(parts.length > 1) {
    const end = parts[1].indexOf("];");
    const replaced = "const validRoutes = [" + combinedRoutesStr + "];" + parts[1].substring(end + 2);
    updated = parts[0] + replaced;
  }
  
  // also fix getSlug in the pages
  const getSlugUpdated = updated.replace(/replace\(\/\\s\+\/g, '-'\)/, "replace(/\\s+/g, '-').replace(/'/g, '')");
  if (content !== getSlugUpdated) {
    fs.writeFileSync(filePath, getSlugUpdated, 'utf8');
  }
}
