//Importacion de referencias
const loginPage = require("../../pages/pageObject/loginPage")
const inventoryPage = require("../../pages/pageObject/inventoryPage")
const fixtCredential = require('../../fixtures/Credentials.json');

//Desarrollo de casos de pruebas
describe('Test Login', () => {

    fixtCredential.forEach(element => {
        it(element.name, function () {

            loginPage.navigate();
            // cy.log(element.expected)
            cy.login(element.username, element.password) // hace login (user,pass)
            if (element.name === 'Login incorrecto: Usuario vacio') {
                loginPage.elements.message().should('have.text', element.expected)
            }
            else if (element.name === 'Login incorrecto: Contraseña vacia') {

                loginPage.elements.message().should('have.text', element.expected)
            }
            else if (element.name === 'Login incorrecto: Contraseña incorrecta') {

                loginPage.elements.message().should('have.text', element.expected)
            }
            else if (element.name === 'Login exitoso: Usuario y Contraseña correctos') {

                inventoryPage.elements.urlInventory().should('eq', element.expected)
            }


        });

    });

});

