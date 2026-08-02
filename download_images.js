const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://i.postimg.cc/50b4BJSb/B.jpg', name: 'B.jpg' },
  { url: 'https://www.image-heberg.fr/files/17783600033809957581.jpg', name: '17783600033809957581.jpg' },
  { url: 'https://www.image-heberg.fr/files/177835927549167421.webp', name: '177835927549167421.webp' },
  { url: 'https://i.postimg.cc/xC50gZ6N/telecharge-(16).jpg', name: 'telecharge-_16_.jpg' },
  { url: 'https://i.postimg.cc/XqLG8WBk/RBQ-assurance-et-garantie.jpg', name: 'RBQ-assurance-et-garantie.jpg' },
  { url: 'https://i.postimg.cc/Qd36nkz5/Bardeau-2024.jpg', name: 'Bardeau-2024.jpg' },
  { url: 'https://i.postimg.cc/YSXb0cCd/BP-2024.jpg', name: 'BP-2024.jpg' },
  { url: 'https://i.postimg.cc/SskS64fS/telecharge-(4).jpg', name: 'telecharge-_4_.jpg' },
  { url: 'https://i.postimg.cc/fLc5gJgd/att-r-Ow-IF8i2FMh-J9-xwj-FSsdp-Wun3x7K-WUmoj-Ymea-ZXh-E.jpg', name: 'IF8i2FMh-J9-xwj-FSsdp-Wun3x7K-WUmoj-Ymea-ZXh-E.jpg' },
  { url: 'https://i.postimg.cc/FKLjSjn2/thumb-show.jpg', name: 'thumb-show.jpg' },
  { url: 'https://i.ibb.co/DD1HBY0d/Gemini-Generated-Image-tb69k1tb69k1tb69.png', name: 'Gemini-Generated-Image-tb69k1tb69k1tb69.png' },
  { url: 'https://i.postimg.cc/76wH34nT/telecharge-(9).jpg', name: 'telecharge-_9_.jpg' },
  { url: 'https://i.postimg.cc/Jnx1KFpJ/telecharge-(17).jpg', name: 'telecharge-_17_.jpg' },
  { url: 'https://i.ibb.co/Dgs96DpR/533529545-702578862825816-4072289905900816055-n.jpg', name: '33529545-702578862825816-4072289905900816055-n.jpg' },
  { url: 'https://i.postimg.cc/nrzwFFxF/Saint-Adolphe-d-Howard-2024-Bardeaux-Mystique-Brun-2-Tons-Avant.jpg', name: 'oward-2024-Bardeaux-Mystique-Brun-2-Tons-Avant.jpg' },
  { url: 'https://i.postimg.cc/DzTjWdhN/Saint-Adolphe-d-Howard-2024-Bardeaux-Mystique-Brun-2-Tons-Apres.jpg', name: 'oward-2024-Bardeaux-Mystique-Brun-2-Tons-Apres.jpg' },
  { url: 'https://i.postimg.cc/3x0KnhP1/Urgence.jpg', name: 'Urgence.jpg' },
  { url: 'https://i.ibb.co/PsxYSsrK/t-l-charg-1.jpg', name: 't-l-charg-1.jpg' },
  { url: 'https://i.postimg.cc/x1x8mDzn/0a3144f1-f390-44f3-befc-71172aa18223.jpg', name: '0a3144f1-f390-44f3-befc-71172aa18223.jpg' },
  { url: 'https://i.postimg.cc/L82ckJMQ/Toiture-inspection-bardeau.png', name: 'Toiture-inspection-bardeau.png' },
  { url: 'https://i.postimg.cc/hjdPvB0q/Deneigement.png', name: 'Deneigement.png' }
];

const dir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, function(response) {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
      response.pipe(file);
      file.on('finish', function() {
        file.close(resolve);
      });
    }).on('error', function(err) {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading images...');
  for (const img of images) {
    const dest = path.join(dir, img.name);
    try {
      await download(img.url, dest);
      console.log(`✅ Downloaded ${img.name}`);
    } catch (e) {
      console.error(`❌ Failed ${img.name}:`, e.message);
    }
  }
  console.log('Done.');
}

run();
