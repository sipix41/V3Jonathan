import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

async function run() {
  const url = 'https://postimg.cc/TyNvxZs4';
  const html = await fetchUrl(url);
  const match = html.match(/https:\/\/i\.postimg\.cc\/[^"]+/);
  console.log(url, '->', match ? match[0] : 'not found');
}
run();
