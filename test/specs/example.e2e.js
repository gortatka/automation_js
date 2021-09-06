const MainPage = require('../pageobjects/main.page');
const CatalogPage = require('../pageobjects/catalog.page');
const { addFeature } = require('@wdio/allure-reporter').defaultж

describe('Suite', () => {
    it('Case', () => {
        allureReporter.addFeature('Feature')
    })
})



describe('My application', () => {
    it('check title', async() => {
        await browser.url(`https://www.onliner.by/`);
        await expect(browser).toHaveTitle('Onliner')

    });

    it('check url', async() => {
        const url = `https://www.onliner.by/`
        await browser.url(url);
        await expect(browser).toHaveUrl(url)
    });

    it('check logo', async() => {
        const url = `https://www.onliner.by/`
        await browser.url(url);
        await expect(MainPage.logo).toBeDisplayed()

    });

    it('check urlCatalog', async() => {
        const url = `https://www.onliner.by/`
        const urlCatalog = `https://catalog.onliner.by/`
        await browser.url(url);

        MainPage.menuCatalog.click()
        await expect(browser).toHaveUrl(urlCatalog)

    });

    it('check subMenu is displayed', async() => {

        const urlCatalog = `https://catalog.onliner.by/`
        await browser.url(urlCatalog);

        CatalogPage.menuItemTechnic.click()
        await expect(CatalogPage.subMenu).toBeDisplayed()

    });



});