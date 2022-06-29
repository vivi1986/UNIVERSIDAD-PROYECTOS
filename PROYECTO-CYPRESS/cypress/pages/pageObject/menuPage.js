class menuPage {

    elements = {


        menuItem: () => cy.get('.bm-item-list .menu-item'),
        menuContent: () => cy.get('.bm-item-list'),
        menuOpenBtn: () => cy.get('#react-burger-menu-btn'),
        menuCloseBtn: () => cy.get('#react-burger-cross-btn'),
    }
    clickBtnOpen() {
        this.elements.menuOpenBtn().click();
    }

    clickBtnClose() {
        this.elements.menuCloseBtn().click();
    }
}
module.exports = new menuPage()