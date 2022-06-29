//Importacion de referencias
const loginPage = require("../../pages/pageObject/loginPage")
const fixtCredential = require('../../fixtures/Credentials.json');
const cartShop = require("../../pages/pageObject/carShop")
//LLamado a Credenciales correctos ,para iniciar el logueo a la pagina
const username = fixtCredential[3].username
const password = fixtCredential[3].password

//Desarrollo de casos de pruebas
describe('Cypress POM Cart Saucedemo', () => {

    beforeEach(function () {
        loginPage.navigate();
        cy.login(username, password)

    })

    it('Test validar  ADD al carrito►INVENTARIO', () => {

        cartShop.clickAddFirtItem();
        cartShop.elements.itemsAddShopingCar().should('have.length', 1)
            .and('be.visible')
    });

    it('Test validar REMOVE al carrito►INVENTARIO', () => {
        cartShop.clickAddFirtItem();
        cartShop.clickDeletItem();
        cartShop.elements.itemsAddShopingCar().should('have.length', 0).and('not.exist')

    });

    //Test validar  ADD al carrito►CARRITO .Este test el profe confirmo que no es valido hacerlo


    it('Test validar REMOVE al CARRITO', () => {
        cartShop.clickAddFirtItem();
        cartShop.clickIntoCart();
        cartShop.clickbtnRemove();
        cartShop.elements.itemQuantity().should('have.length', 0)

    });

    it('Test validar elementos agregados al shopping_cart', () => {
        cartShop.clickAddFirtItem();
        cartShop.clickAddSecondItem();
        cartShop.clickIntoCart();
        cartShop.ItemsCount();

        cy.get('@countItemAdded').then((list) => {
            cartShop.elements.itemsAddShopingCar().should('have.text', list.length).and('be.visible')
        })

    });

    it('Test Validar Checkout (Completar orden)', () => {
        cartShop.clickAddFirtItem();
        cartShop.clickAddSecondItem();
        cartShop.clickIntoCart();
        cartShop.clickbtnCheckout();
        cartShop.elements.firstName().type('VivianSusana');
        cartShop.elements.lastName().type('Arias');
        cartShop.elements.postalCode().type('506');
        cartShop.clickbtnSumbit();
        cartShop.clickbtnCompled();
        cartShop.elements.titleSpan().should('have.text', 'Checkout: Complete!').and('be.visible');

    });

});