// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Comando personalizado 
Cypress.Commands.add("login", (correo) => {
    
    cy.get('#reg_email').type(correo); //Tipeamos el correo en el text-box
    cy.get('.woocommerce-Button').click(); //Hacemos clic en el botón de logueo
    cy.get('.nav-menu > :nth-child(1) > a').click() //Hacemos clic en Home

})

Cypress.Commands.add("user", (username) => {
    cy.visit('http://logofree.esy.es/');
    cy.get('.nav-menu > .page-item-8 > a').click(); // Hacemos clic en Mi cuenta
    cy.get('#username').type(username); //Tipeamos el Usuario en el text-box
    
})