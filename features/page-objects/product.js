const{until} = require('selenium-webdriver')
const {expect} = require('chai')
const PRODUCT_TITLE = {css: 'span.title'}
const BOLT_T_Shirt = {xpath: '//div[@class="inventory_item_name"][contains(text(), "Sauce Labs Bolt T-Shirt")]'}
const BACKPACK = {xpath: '//div[@class="inventory_item_name"][contains(text(), "Sauce Labs Backpack")]'}
const BOLT_T_SHIRT_ADDTOCART = {css: 'button#add-to-cart-sauce-labs-bolt-t-shirt'}
const BACKPACK_ADDTOCART = {css: 'button#add-to-cart-sauce-labs-backpack'}
const BOLT_T_SHIRT_PRICE = {xpath: '//div[@class="inventory_item_label"]//div[@class="inventory_item_name"][contains(text(), "Sauce Labs Bolt T-Shirt")]//..//..//..//div[@class="inventory_item_price"]'}
const CART = {css: 'span.shopping_cart_badge'}
const CHECKOUT = {id: 'checkout'}
const FIRST_NAME = {id: 'first-name'}
const LAST_NAME = {id: 'last-name'}
const POSTAL_CODE = {id: 'postal-code'}
const CHECKOUT_HEADER = {css: 'span.title'}
const CONTINUE = {id: 'continue'}
const TOTAL = {css: 'div.summary_total_label'}
const FINISH = {id: 'finish'}

class product {
  async addToBasket(item) {
    await driver.wait(until.elementLocated(PRODUCT_TITLE),10000).then(async() => {
        if (item == "Sauce Labs Bolt T-Shirt") {
            await driver.wait(until.elementLocated(BOLT_T_Shirt),10000).then(async() => {
                await driver.findElement(BOLT_T_SHIRT_ADDTOCART).click()
            });
        } else if (item == "Sauce Labs Backpack") {
            await driver.wait(until.elementLocated(BACKPACK),10000).then(async() => {
                await driver.findElement(BACKPACK_ADDTOCART).click()
            });
        }
    })
  };

  async assertPrice(item, price) {
    let element
    if (item == "Bolt T-Shirt"){
        element = BOLT_T_SHIRT_PRICE
    } else if (item == "Total"){
        element = TOTAL
    }
    await driver.findElement(element)
      .getText().then(priceText => {
        expect(priceText).to.have.string(price);
    });
  };

  async checkout(){
    await driver.findElement(CART)
        .getText().then(async(number) => {
            expect(number).to.equal("2");
            await driver.findElement(CART).click()
            await driver.wait(until.elementLocated(CHECKOUT),10000).then(async() => {
                await driver.findElement(CHECKOUT).click()
            });
    });
  }

  async enterDetails(){
    await driver.wait(until.elementLocated(CHECKOUT_HEADER),10000).then(async() => {
        await driver.findElement(CHECKOUT_HEADER)
        .getText().then(async(textValue) => {
            expect(textValue).to.equal('CHECKOUT: YOUR INFORMATION');
            await driver.findElement(FIRST_NAME).sendKeys("John")
            await driver.findElement(LAST_NAME).sendKeys("Doe") 
            await driver.findElement(POSTAL_CODE).sendKeys("0035")
            await driver.findElement(CONTINUE).click()
        });  
    })
  }

  async orderSuccessful(){
    await driver.wait(until.elementLocated(FINISH),10000).then(async() => {
        await driver.findElement(FINISH).click().then(async() =>{
            await driver.wait(until.elementLocated(CHECKOUT_HEADER),10000).then(async() => {
                await driver.findElement(CHECKOUT_HEADER)
                .getText().then(textValue => {
                    expect(textValue).to.equal('CHECKOUT: COMPLETE!');
                }); 
            })
        })  
    }) 
  }
}

module.exports = product