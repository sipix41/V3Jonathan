import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('pages/CityTemplate.tsx', 'utf8');

// 1. In FAQ_DATA, it's outside the component. We must move FAQ_DATA inside the component or make it a function that takes cityName.
content = content.replace(/const FAQ_DATA = \[/, 'const getFaqData = (cityName: string) => [');
// Change the end of FAQ_DATA
content = content.replace(/];\n\nexport const CityTemplate/, '];\n\nexport const CityTemplate');

content = content.replace(/\{cityName\}/g, '${cityName}');
// Note: This replaces ALL {cityName} to ${cityName}. We will fix JSX curly braces manually where needed. 
fs.writeFileSync('pages/CityTemplate.tsx', content);
