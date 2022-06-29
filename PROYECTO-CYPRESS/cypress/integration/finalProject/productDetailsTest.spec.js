//Importacion de referencias
const loginPage = require("../../pages/pageObject/loginPage")
const InventoryPage = require("../../pages/pageObject/InventoryPage")
const fixtDetailsProduct = require('../../fixtures/Inventory.json');
const fixtCredential = require('../../fixtures/Credentials.json');

//LLamado a Credenciales correctos ,para iniciar el logueo a la pagina
const username = fixtCredential[3].username
const password = fixtCredential[3].password

//Desarrollo de casos de pruebas
describe('Test Product', () => {

    beforeEach(function () {
        loginPage.navigate();
        cy.login(username, password)
    })

    it('Detalles del producto(imagen,nombre,precio)', () => {
        InventoryPage.clickOpenProductBtn();

        //imagen
        InventoryPage.elements.productImgName2().should('be.visible').and("have.attr", "src", fixtDetailsProduct[2].imagen)

        //nombre
        InventoryPage.elements.productName2().invoke('text').then((text) => {
            expect(text).to.equal(fixtDetailsProduct[2].name)
        })
        //price
        InventoryPage.elements.productPrice2().invoke('text').then((price) => {
            expect(price).to.equal(fixtDetailsProduct[2].price)
        })

    })


    it('Botón “Back to products”', () => {
        InventoryPage.clickOpenProductBtn();
        InventoryPage.clickBackProductBtn();
        InventoryPage.elements.urlInventory().should('eq', 'https://www.saucedemo.com/inventory.html')

    });


})
