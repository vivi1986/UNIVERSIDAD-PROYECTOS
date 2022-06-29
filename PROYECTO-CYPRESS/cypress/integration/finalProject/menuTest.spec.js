//Importacion de referencias
const loginPage = require("../../pages/pageObject/loginPage")
const fixtCredential = require('../../fixtures/Credentials.json');
const menuPage = require("../../pages/pageObject/menuPage")
const fixtMenuOpc = require('../../fixtures/Menu.json');
//LLamado a Credenciales correctos ,para iniciar el logueo a la pagina
const username = fixtCredential[3].username
const password = fixtCredential[3].password

//Desarrollo de casos de pruebas
describe('Test Menu', () => {

    beforeEach(function () {
        loginPage.navigate();
        cy.login(username, password)
    })

    it('Opciones del Menu', () => {

        menuPage.clickBtnOpen();
        const menuList = fixtMenuOpc

        menuPage.elements.menuItem().each((myMenu, index, list) => {
            cy.log(myMenu.text())
            cy.wrap(myMenu).invoke('text').then((MenuOp) => {
                expect(MenuOp).to.contain(menuList[index])
            })

        });
    })

    it('Abrir y Cerrar Menu', () => {
        menuPage.clickBtnOpen();
        menuPage.elements.menuContent().should('be.visible', '.bm-item-list')
        menuPage.clickBtnClose();
        menuPage.elements.menuContent().should('not.be.visible', '.bm-item-list')

    });


})

