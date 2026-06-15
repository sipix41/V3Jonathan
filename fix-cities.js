import fs from 'fs';
import path from 'path';

const filesToFix = [
  'Lantier.tsx',
  'CityTemplate.tsx',
  'MilleIsles.tsx',
  'SaintFaustinLacCarre.tsx',
  'Bellefeuille.tsx',
  'SaintAdolpheDHoward.tsx',
  'SaintColomban.tsx',
  'Esterel.tsx',
  'ValDesLacs.tsx',
  'Amherst.tsx',
  'MontOlympia.tsx',
  'SainteSophie.tsx',
  'SainteMargueriteDuLacMasson.tsx',
  'WentworthNord.tsx',
  'Arundel.tsx'
];

for (const file of filesToFix) {
  const filePath = path.join(process.cwd(), 'pages', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replacement 1
    content = content.replace(/combine de vastes territoires agricoles et des zones résidentielles en effervescence\. Des nouvelles constructions contemporaines dans les quartiers comme le Domaine-Vert \(Nord et Sud\) aux bungalows confortables de Saint-Janvier, Saint-Canut ou Saint-Augustin, le paysage immobilier est hétéroclite\./g, 
      "possède un charme unique avec ses paysages naturels et ses quartiers variés. Des propriétés au cœur de la ville aux chalets nichés en pleine nature, son paysage immobilier de la région est riche et hétéroclite.");

    // Replacement 2
    content = content.replace(/des grands corridors de vents des secteurs ruraux \(Saint-Benoît, Sainte-Scholastique\) aux densités urbaines \(Domaine-Vert, Saint-Janvier\)/g, 
      "des défis particuliers posés par le climat local, des vents forts près des lacs aux conditions vigoureuses en altitude");

    // Replacement 3
    content = content.replace(/\(dans les secteurs de Saint-Janvier, Saint-Canut, le Domaine-Vert Nord et Sud, Sainte-Scholastique ou Saint-Augustin\), plus au nord vers Prévost et Saint-Sauveur, ou juste à côté dans le grand pôle de Saint-Jérôme/g, 
      "dans ses divers quartiers ou dans les municipalités environnantes");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
}
