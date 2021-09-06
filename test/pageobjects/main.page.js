const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logo() { return $('.b-top-logo') }
    get menuCatalog() { return $('=Каталог') }


}

module.exports = new MainPage();