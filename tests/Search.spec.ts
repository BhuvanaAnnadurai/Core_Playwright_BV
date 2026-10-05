import {test} from '@playwright/test';


// test('Search', async ({page}) => {
//     // locator keyword only for CSS selector and xpath values
//     await page.goto('https://www.walgreens.com/');
    
//     await page.locator('input#ntt-placeholder').fill("Wipes");
//     await page.getByRole('button', { name: 'Search', exact: true }).click();
//     // await page.locator("//div[@class='gh-search-input__wrap']").fill("iphone");
//     // await page.locator('button#gh-search-btn').click();
//     await page.locator('h1.header-left-content-h1').isVisible();
//     await page.waitForTimeout(5000);
//     await page.goBack();
//     await page.waitForTimeout(5000);
//     await page.goForward();
//     // await page.waitForTimeout(5000);
//     // await page.reload();
//     // await page.waitForTimeout(5000);

// });

// test('Search123', async ({page}) => {

//     await page.goto('https://www.ebay.com/');
    // await page.getAttribute("//div[@class='gh-search-input__wrap']", "id");
    // await page.getByAltText('eBay Logo').click();
    // await page.getByRole('link', { name: 'Electronics' }).click();
    // await page.getByLabel('link', { name: 'Cell Phones & Accessories' }).click();
    // await page.getByTitle('Cell Phones & Smartphones').click();
    // await page.locator("//div[@class='gh-search-input__wrap']").fill("iphone");
    // await page.locator('button#gh-search-btn').click();
    // await page.locator('h1#srp-results-heading').isVisible();
// });

// test('Search for Laptop', async ({page})=>{
//         await page.goto('https://www.ebay.com/');
//         await page.locator("//div[@class='gh-search-input__wrap']").fill("laptop");
//         await page.locator('button#gh-search-btn').click();
//         await page.locator('h1#srp-results-heading').isVisible();
// });




test('Mouse Actions', async({page})=>{

    await page.goto('https://www.walgreens.com/');
    await page.locator('input#ntt-placeholder').fill("Wipes");
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(5000);
    
    const srp_title = await page.locator("//h1[@class='title-xx-large semi-bold']");

    // await page.waitForTimeout(5000);
    await srp_title.isVisible();

    await page.locator("(//div[@id='wag-header-logo-container'])[1]").hover();
    await page.waitForTimeout(2000);
    // await page.locator("(//div[@id='wag-header-logo-container'])[1]").dblclick();
    // await page.waitForTimeout(2000);
    await srp_title.highlight();
    await page.waitForTimeout(2000);
    
    const footerlink =await page.locator('div.footer__logo');
    await footerlink.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await footerlink.click({button: 'right'});
    // await page.waitForTimeout(2000);
    await page.mouse.move(0, 1000);
    await page.pause();





    // await page.locator("//div[@class='gh-search-input__wrap']").fill("iphone");
    // await page.locator('button#gh-search-btn').click();
    // await page.locator('h1.header-left-content-h1').isVisible();
    // await page.waitForTimeout(5000);
    // await page.goBack();
    // await page.waitForTimeout(5000);
    // await page.goForward();
    // await page.waitForTimeout(5000);
    // await page.reload();
    // await page.waitForTimeout(5000);

});



