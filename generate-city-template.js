import fs from 'fs';

let content = fs.readFileSync('pages/Amherst.tsx', 'utf8');

content = content.replace(/export const Amherst: React.FC = \(\) => \{/g, 'export const CityTemplate: React.FC<{ cityName: string; cityPath: string }> = ({ cityName, cityPath }) => {');

content = content.replace(/const FAQ_DATA = \[([\s\S]*?)\];\n\nexport const CityTemplate/, 'export const CityTemplate');

content = content.replace(/export const CityTemplate: React\.FC<\{ cityName: string; cityPath: string \}> = \(\{ cityName, cityPath \}\) => \{/, 
`export const CityTemplate: React.FC<{ cityName: string; cityPath: string }> = ({ cityName, cityPath }) => {
  const FAQ_DATA = [
    {
      question: \`Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à \${cityName} ?\`,
      answer: "Compte tenu de notre exposition aux grands vents et aux extrêmes climatiques, une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, si elle est parfaitement installée et adéquatement ventilée par l'entretoit, durera de façon tout à fait réaliste entre 20 et 30 ans. L'entretien de vos gouttières et un bon déneigement préventif l'hiver sont cruciaux pour maximiser cette longévité.",
    },
    {
      question: \`À quel moment précis de l'année devrais-je faire faire une inspection de toiture \${cityName} ?\`,
      answer: "L'approche la plus rentable est la prévention. Nous recommandons vivement une inspection visuelle annuelle. Le meilleur moment est la fin de l'automne, une fois les feuilles des arbres environnants tombées, pour s'assurer que les gouttières sont propres et que les solins sont hermétiques avant les gels intenses. Le printemps est également un moment clé pour diagnostiquer rapidement tout dommage potentiel causé par la glace.",
    },
    {
      question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à de grands vents ?",
      answer: "Oui, absolument. Les vents de la plaine peuvent être féroces. Si une puissante rafale a arraché une section complète de bardeaux de votre toit, appelez-nous immédiatement. Notre équipe d'intervention se déploiera rapidement pour sécuriser les lieux avec l'installation de toiles de protection temporaires épaisses, arrêtant ainsi les dégâts à l'intérieur, pour ensuite planifier la réfection permanente.",
    },
    {
      question: \`Comment évaluez-vous le coût moyen d'un remplacement bardeaux asphalte \${cityName} ?\`,
      answer: "Il est peu professionnel de donner un prix à l'aveugle, car chaque toiture est unique. Le coût d'un remplacement complet varie en fonction de plusieurs variables d'importance : la superficie totale du toit, la pente de la toiture, la complexité architecturale, ainsi que la gamme de matériaux choisis. Nous offrons une estimation sur place, 100 % gratuite et détaillée.",
    },
    {
      question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
      answer: "Le déneigement d'un toit est une tâche hautement dangereuse. Nos professionnels disposent du matériel de sécurité adéquat et de pelles en polymère aux bords arrondis pour effectuer le travail en toute sécurité.",
    },
  ];`);

// Fix literal strings
content = content.replace(/"Services de toiture à Amherst"/g, '`Services de toiture à ${cityName}`');
content = content.replace(/"addressLocality": "Amherst"/g, '"addressLocality": cityName');
content = content.replace(/"name": "Amherst"/g, '"name": cityName');
content = content.replace(/"Vous cherchez un couvreur de confiance à Amherst\? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement\."/g, "\`Vous cherchez un couvreur de confiance à \${cityName}? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement.\`");
content = content.replace(/"Couvreur Amherst \| Toiture Jonathan Délisle Inc – Toiture Laurentides"/g, "\`Couvreur \${cityName} | Toiture Jonathan Délisle Inc – Toiture Laurentides\`");
content = content.replace(/"Vous cherchez un couvreur de confiance à Amherst\? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement\. Soumission gratuite!"/g, "\`Vous cherchez un couvreur de confiance à \${cityName}? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!\`");
content = content.replace(/canonicalUrl="\/amherst"/g, 'canonicalUrl={cityPath}');

// Inside JSX
content = content.replace(/>Services de toiture à Amherst</g, '>{`Services de toiture à ${cityName}`}<');
content = content.replace(/Amherst/g, '{cityName}');

fs.writeFileSync('pages/CityTemplate.tsx', content);
console.log('CityTemplate generated.');
