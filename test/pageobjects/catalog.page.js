const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CatalogPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuItemTechnic() { return $('//span[contains(text(),"Бытовая")]') }
    get subMenu() { return $('//div[contains(text(),"Встраиваемая")]') }

}

module.exports = new CatalogPage();