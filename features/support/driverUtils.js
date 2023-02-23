const {Before, After, setDefaultTimeout} = require('@cucumber/cucumber')
const webdriver = require('selenium-webdriver');
exports.initDriver = () => {
    driver = new webdriver.Builder()
        .forBrowser(webdriver.Browser.CHROME)
        .build();
    return driver;
}



