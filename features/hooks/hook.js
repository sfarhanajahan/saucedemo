
const {initDriver} = require('../support/driverUtils')
const {Before, After, BeforeAll, AfterAll, setDefaultTimeout} = require('@cucumber/cucumber')
const shared = require('../shared/data')
setDefaultTimeout(60*1000)

Before(async () => {
    driver = initDriver()
    await driver.get(shared.url)
});

After(async () => {
    await driver.quit()
});