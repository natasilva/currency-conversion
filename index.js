const puppeteer = require('puppeteer');
const readline = require('readline-sync');

(async () => {
    const navigator = await puppeteer.launch({ headless: true});
    const page = await navigator.newPage();

    let baseCurrency = readline.question('Informe a moeda base: ') || 'dolar';
    let finalCurrency = readline.question('Informe a moeda final: ') || 'real';

    await page.goto(`https://www.google.com/search?q=${baseCurrency}+para+${finalCurrency}&oq=${baseCurrency}+para+${finalCurrency}&aqs=chrome..69i57j0i131i433i512j0i512l8.1920j1j7&sourceid=chrome&ie=UTF-8`);

    await page.screenshot({ path: './print/img001.png' })

    let result = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value
    })

    console.log("O valor de 1 " + baseCurrency + " em " + finalCurrency + " é " + result);

    await navigator.close()
})()
