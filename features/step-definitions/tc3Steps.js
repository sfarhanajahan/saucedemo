const {Then} = require('@cucumber/cucumber')
const Product = require('../page-objects/product')


Then('I added {string}', async (item) => {
    let product = new Product(driver)
    await product.addToBasket(item);
});

Then('The {string} price is {string}', async (item, price) => {
    let product = new Product(driver)
    await product.assertPrice(item, price)
});

Then('I checkout', async () => {
    let product = new Product(driver)
    await product.checkout();
    await product.enterDetails();
});

Then('I finish the order', async () => {
    let product = new Product(driver)
    await product.orderSuccessful();
});
