const{until} = require('selenium-webdriver')
const {expect} = require('chai')
const USERNAME_INPUT = { id: 'user-name' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { id: 'login-button' }
const PRODUCT_TITLE = {css: 'span.title'}
const ERROR_LOGIN = {css: 'div.error-message-container'}

class login {
  async submitLogin(username, password) {
    await driver.findElement(USERNAME_INPUT).sendKeys(username)
    await driver.findElement(PASSWORD_INPUT).sendKeys(password)
    await driver.findElement(SUBMIT_BUTTON).click()
    //console.log(driver.findElement(PRODUCT_TITLE).getText())
  }
  async loginSuccessful(){
    await driver.wait(until.elementLocated(PRODUCT_TITLE),10000);
    await driver.findElement(PRODUCT_TITLE)
      .getText().then(textValue => {
        expect(textValue).to.equal('PRODUCTS');
      });
  }
  async loginUnsuccessful(){
    await driver.findElement(ERROR_LOGIN)
      .getText().then(textValue => {
        expect(textValue).to.equal('Epic sadface: Sorry, this user has been locked out.');
      });
  }
}

module.exports = login