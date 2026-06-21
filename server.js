const puppeteer = require('puppeteer');

async function iniciarChrome() {
  // Abre el navegador Chrome en el servidor
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // Entra a la página que necesitas y se queda ahí para siempre
  await page.goto('https://LA-PAGINA-QUE-TU-QUIERAS.com', { waitUntil: 'networkidle2', timeout: 0 });
  
  console.log("Chrome está abierto y funcionando en la nube 24/7");
}

iniciarChrome();
