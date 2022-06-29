

const loginPage = require("../pages/pageObject/loginPage")

Cypress.Commands.add('login', (user,pass)=> {
    loginPage.enterUsername(user)
    loginPage.enterPassword(pass)
    loginPage.clickBtn()
  })

