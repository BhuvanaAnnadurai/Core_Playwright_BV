import {test} from '@playwright/test';


test('Search', async ({page}) => {

    await page.goto('https://www.ebay.com/');
    await page.locator("//div[@class='gh-search-input__wrap']").fill("iphone");
    await page.locator('button#gh-search-btn').click();
    await page.locator('h1#srp-results-heading').isVisible();

});

test('Search for Laptop', async ({page})=>{

        await page.goto('https://www.ebay.com/');
        await page.locator("//div[@class='gh-search-input__wrap']").fill("laptop");
        await page.locator('button#gh-search-btn').click();
        await page.locator('h1#srp-results-heading').isVisible();
});



