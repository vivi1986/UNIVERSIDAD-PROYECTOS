class cartShop {

    elements = {
        titleSpan: () => cy.get('.title'),
        btnRemove: () => cy.get('button[class="btn btn_secondary btn_small cart_button"]'),
        IntoCart: () => cy.get('.shopping_cart_link'),
        itemQuantity: () => cy.get('.cart_list [class=cart_item]'),
        itemsAddShopingCar: () => cy.get('.shopping_cart_badge'),
        addFirtItem: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        addSeconfdItem: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        deleteItemToCar: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        btnSumbit: () => cy.get('[type=submit]'),
        btnCompled: () => cy.get('button[name="finish"]'),
        btnCheckout: () => cy.get('button[name="checkout"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]')
    }

    clickAddFirtItem() {
        this.elements.addFirtItem().click();
    }

    clickAddSecondItem() {
        this.elements.addSeconfdItem().click();
    }

    clickDeletItem() {
        this.elements.deleteItemToCar().click()
    }

    clickIntoCart() {
        this.elements.IntoCart().click()
    }

    clickbtnCheckout() {

        this.elements.btnCheckout().click()
    }

    clickbtnRemove() {
        this.elements.btnRemove().click()
    }


    clickbtnSumbit() {

        this.elements.btnSumbit().click()
    }

    clickbtnCompled() {

        this.elements.btnCompled().click()
    }


    //cy_wrap

    listCountItemAdded = []
    ItemsCount() {
        this.elements.itemQuantity().each((index) => {
            this.listCountItemAdded.push(index)
        })
        cy.wrap(this.listCountItemAdded).as('countItemAdded')
    }

}

module.exports = new cartShop()