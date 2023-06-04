describe('Constructor', () => {
		beforeEach(() => {
				cy.visit('http://localhost:3000')
				cy.intercept("GET", "api/auth/user", {fixture: "user.json"});
				cy.intercept("POST", "api/orders", {fixture: "order.json"});
				cy.intercept("GET", "api/ingredients", {fixture: 'ingredients.json'})

				window.localStorage.setItem(
						"refreshToken",
						JSON.stringify("test-refreshToken")
				);
				cy.setCookie('accessToken', 'test-accessToken')
		})

		it('should contain ingredient after drag and drop', () => {
				cy.get('[data-testid=643d69a5c3f7b9001cfa0940]').trigger('dragstart')
				cy.get('[data-testid=constructor]').trigger('drop')
				cy.get('[data-testid=643d69a5c3f7b9001cfa093c]').trigger('dragstart')
				cy.get('[data-testid=constructor]').trigger('drop')
		})

		it('should open modal and contain ingredient details after click', () => {
				cy.get('[data-testid=643d69a5c3f7b9001cfa0940]').click()
				cy.get('[data-testid=ingredient_details-name]').should("have.text", 'Говяжий метеорит (отбивная)')

				cy.get('[data-testid=ingredient_detail-value]').should("have.text", 2674800800300)

		})

		it('should close modal after click ESC key', () => {
				cy.get('[data-testid=643d69a5c3f7b9001cfa0940]').click()
				cy.get('body').trigger('keydown',{key: 'Escape'})
				cy.get('[data-testid=modal]').should("not.exist")
		})

		it('should close order modal after click close button ', () => {
				cy.get('[data-testid=643d69a5c3f7b9001cfa0940]').click()
				cy.get('[data-testid=modal]').should("exist")
				cy.get('[data-testid=close_button]').click()
				cy.get('[data-testid=modal]').should("not.exist")
		})

		it('should open order modal after order button click ', () => {
				cy.get('[data-testid=643d69a5c3f7b9001cfa0940]').trigger('dragstart')
				cy.get('[data-testid=constructor]').trigger('drop')
				cy.get('[data-testid=643d69a5c3f7b9001cfa093c]').trigger('dragstart')
				cy.get('[data-testid=constructor]').trigger('drop')

				cy.get('[data-testid=order-button]').click()
				cy.get('[data-testid=modal]').should("exist")
				cy.get('[data-testid=order_details-number]').should("have.text",2023)
		})
})