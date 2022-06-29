//Importacion de referencias
const loginPage = require("../../pages/pageObject/loginPage")
const inventoryPage = require("../../pages/pageObject/inventoryPage")
const fixtDetailsProduct = require('../../fixtures/Inventory.json');
const fixtCredential = require('../../fixtures/Credentials.json');

//LLamado a Credenciales correctos ,para iniciar el logueo a la pagina
const username = fixtCredential[3].username
const password = fixtCredential[3].password

describe('Test inventario de productos', () => {

  before(function () {
    loginPage.navigate();
    cy.login(username, password)
  })
  it('Lista de productos: Cantidad de productos', () => {
    inventoryPage.elements.listaProductElements().should('have.length', 6)
  });


  fixtDetailsProduct.forEach(element => {
    it(element.name, function () {
      inventoryPage.elements.getProductName(element.name).should("have.text", element.name)
      inventoryPage.elements.getProductPrice(element.price).should("have.text", element.price)
      inventoryPage.elements.getProductName(element.name).parent().parent().parent().parent().find('a img').should("have.attr", "src", element.imagen)
      inventoryPage.elements.getProductStatus(element.status).should("have.text", element.status)
    });
  });

  it('Ordenar Productos Por Precio LOW-HIGT', () => {
    inventoryPage.productPicesList()
    cy.get('@AllPrices').then((list) => {
      expect(list.map(Number)).to.be.sorted()
    })
  })

})

