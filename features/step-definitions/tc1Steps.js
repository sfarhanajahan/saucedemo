const {When, Then} = require('@cucumber/cucumber')
const Login = require('../page-objects/login')

When('I signin saucedemo with {string} and {string}', async (user, pass) => {
    let login = new Login(driver)
    await login.submitLogin(user, pass);
  });

Then('I successfully login', async() => {
    let login = new Login(driver)
    await login.loginSuccessful();
  });



