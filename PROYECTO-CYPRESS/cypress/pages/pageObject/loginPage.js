//clase para ingreso Index
class loginPage {
    navigate() {
        cy.visit('https://www.saucedemo.com/')

    }

    //Lista de Elementos
    elements = {
        usernameField: () => cy.get('input[name=user-name]'),
        passwordField: () => cy.get('input[name=password]'),
        loginBtn: () => cy.get('#login-button'),
        message: () => cy.get('h3[data-test="error"]'),
        urlInventory: () => cy.url()
    }


    enterUsername(username) {
        this.elements.usernameField().type(username)
    }

    enterPassword(password) {
        this.elements.passwordField().type(password)
    }

    clickBtn() {
        this.elements.loginBtn().click()
    }


}
module.exports = new loginPage()