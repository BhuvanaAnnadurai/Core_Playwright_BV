import {test} from '@playwright/test';


test('Search', async ({page}) => {

    await page.goto('https://www.ebay.com/');
    await page.locator('input.gh-search-input.gh-tb.ui-autocomplete-input').fill("iphone");
    await page.locator('button#gh-search-btn').click();
    await page.locator('h1#srp-results-heading').isVisible();

});

