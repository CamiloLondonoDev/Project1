describe('Pruebas de api con cypress', () => {
    it('Petición HTTP Get con validación de property en el Body', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').its('body').should('have.property', 'page', 2);
    })
})