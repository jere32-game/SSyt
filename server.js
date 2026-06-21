const puppeteer = require('puppeteer');

async function iniciarChrome() {
  console.log("Iniciando Google Chrome en la nube...");
  const browser = await puppeteer.launch({ 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  
  // REMPLAZA ESTA URL POR LA TUYA
  await page.goto('https://ssytbot.netlify.app/', { waitUntil: 'networkidle2' });
  
  console.log("Página cargada con éxito. Esperando 30 segundos en la nube...");
  await new Promise(resolve => setTimeout(resolve, 30000)); 
  
  await browser.close();
  console.log("Tarea completada. Chrome cerrado hasta la próxima ejecución.");
}

iniciarChrome();
