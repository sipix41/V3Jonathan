import fs from "fs";

const cities = [
  { name: 'Amherst', path: '/amherst', comp: 'Amherst' },
  { name: 'Arundel', path: '/arundel', comp: 'Arundel' },
  { name: 'Bellefeuille', path: '/bellefeuille', comp: 'Bellefeuille' },
  { name: 'Estérel', path: '/esterel', comp: 'Esterel' },
  { name: 'Lac-Supérieur', path: '/lac-superieur', comp: 'LacSuperieur' },
  { name: 'Lantier', path: '/lantier', comp: 'Lantier' },
  { name: 'Mille-Isles', path: '/mille-isles', comp: 'MilleIsles' },
  { name: 'Mirabel', path: '/mirabel', comp: 'Mirabel' },
  { name: 'Mont-Blanc', path: '/mont-blanc', comp: 'MontBlanc' },
  { name: 'Mont-Olympia', path: '/mont-olympia', comp: 'MontOlympia' },
  { name: 'Mont-Tremblant', path: '/mont-tremblant', comp: 'MontTremblant' },
  { name: 'Morin-Heights', path: '/morin-heights', comp: 'MorinHeights' },
  { name: 'Piedmont', path: '/piedmont', comp: 'Piedmont' },
  { name: 'Prévost', path: '/prevost', comp: 'Prevost' },
  { name: 'Saint-Adolphe-d\'Howard', path: '/saint-adolphe-dhoward', comp: 'SaintAdolpheDHoward' },
  { name: 'Saint-Colomban', path: '/saint-colomban', comp: 'SaintColomban' },
  { name: 'Saint-Faustin-Lac-Carré', path: '/saint-faustin-lac-carre', comp: 'SaintFaustinLacCarre' },
  { name: 'Saint-Hippolyte', path: '/saint-hippolyte', comp: 'SaintHippolyte' },
  { name: 'Saint-Jérôme', path: '/saint-jerome', comp: 'SaintJerome' },
  { name: 'Saint-Sauveur', path: '/saint-sauveur', comp: 'SaintSauveur' },
  { name: 'Sainte-Adèle', path: '/sainte-adele', comp: 'SainteAdele' },
  { name: 'Sainte-Agathe-des-Monts', path: '/sainte-agathe-des-monts', comp: 'SainteAgatheDesMonts' },
  { name: 'Sainte-Anne-des-Lacs', path: '/sainte-anne-des-lacs', comp: 'SainteAnneDesLacs' },
  { name: 'Sainte-Lucie-des-Laurentides', path: '/sainte-lucie-des-laurentides', comp: 'SainteLucieDesLaurentides' },
  { name: 'Sainte-Marguerite-du-Lac-Masson', path: '/sainte-marguerite-du-lac-masson', comp: 'SainteMargueriteDuLacMasson' },
  { name: 'Sainte-Sophie', path: '/sainte-sophie', comp: 'SainteSophie' },
  { name: 'Val-David', path: '/val-david', comp: 'ValDavid' },
  { name: 'Val-des-Lacs', path: '/val-des-lacs', comp: 'ValDesLacs' },
  { name: 'Val-Morin', path: '/val-morin', comp: 'ValMorin' },
  { name: 'Wentworth-Nord', path: '/wentworth-nord', comp: 'WentworthNord' },
  { name: 'Les Laurentides', path: '/laurentides', comp: 'Laurentides' }
];

let appTsx = fs.readFileSync("App.tsx", "utf-8");

// Generate imports
const imports = cities.map(c => `const ${c.comp} = React.lazy(() => import("./pages/${c.comp}").then((module) => ({ default: module.${c.comp} })));`).join("\n");

// Replace CityTemplate
appTsx = appTsx.replace(/const CityTemplate = React.lazy.*?\n/g, imports + "\n");

// Add back Laurentides because it might be removed by mistake or already added, we'll just rewrite the whole block between // Dynamically render... and <Route path="/realisations"

const routesBlock = cities.map(c => `                <Route path="${c.path}" element={<${c.comp} />} />`).join("\n");

const startComment = "{/* Dynamically render all city routes using the CityTemplate */}";
const endComment = "<Route path=\"/realisations\"";

const regex = new RegExp(startComment.replace(/\//g, "\\/") + "[\\s\\S]*?" + endComment.replace(/\//g, "\\/"));

appTsx = appTsx.replace(regex, `                {/* Individual City Routes */}\n${routesBlock}\n\n                <Route path="/realisations"`);

fs.writeFileSync("App.tsx", appTsx);
console.log("App.tsx fixed");
