//clase para ingreso Index
class inventoryPage {
    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    //Lista de Elementos
    elements = {
        urlInventory: () => cy.url(),
        usernameField: () => cy.get('input[name=user-name]'),
        passwordField: () => cy.get('input[name=password]'),
        loginBtn: () => cy.get('#login-button'),
        openProductBtn: () => cy.get('#item_2_title_link'),
        backProductBtn: () => cy.get('#back-to-products'),
        productTitle: () => cy.get('.title'),
        productName: () => cy.get('.inventory_item_name'),
        productPrice2: () => cy.get('.inventory_details_price'),
        productName2: () => cy.get('.inventory_details_name.large_size'),
        productImgName2: () => cy.get('.inventory_details_img'),
        listaProductElements: () => cy.get('.inventory_list .inventory_item'),
        getProductName: (productNames) => cy.get('.inventory_list .inventory_item .inventory_item_name').contains(productNames),
        getProductPrice: (productPrices) => cy.get('.inventory_list .inventory_item .inventory_item_price').contains(productPrices),
        getProductStatus: (productsStatus) => cy.get('.pricebar button').contains(productsStatus),
        productContainer: () => cy.get('.product_sort_container'),
        getAllPrices: () => cy.get('.inventory_list .inventory_item .inventory_item_price'),
    }


    productListToOrder = []

    productPicesList() {
        this.elements.productContainer().select('lohi')//Ordenar
        this.elements.getAllPrices().each(($el) => {
            this.productListToOrder.push(($el.text().replace('$', '')))
        })
        cy.wrap(this.productListToOrder).as('AllPrices')

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

    clickOpenProductBtn() {
        this.elements.openProductBtn().click()
    }
    clickBackProductBtn() {
        this.elements.backProductBtn().click()
    }

}
module.exports = new inventoryPage()
