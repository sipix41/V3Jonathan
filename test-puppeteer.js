import puppeteer from 'puppeteer';
(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setContent('<h1>Hello</h1>');
    const html = await page.content();
    console.log(html);
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
