const {Then} = require('@cucumber/cucumber')
const Login = require('../page-objects/login')

Then('I unsuccessfully login', async() => {
    let login = new Login(driver)
    await login.loginUnsuccessful();
});



