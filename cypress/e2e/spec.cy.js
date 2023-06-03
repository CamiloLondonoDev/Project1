//Navigation test

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://google.com')
//   })
// })


// Pass test
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

//Fails test
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })


//Navigate to an URL and writes the email in a email input
// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })


// Test to select a checkbox
//los elementos before y after estn pr que en teoria en un suit de pruebas 
//pueden ejecutarse acciones antes o desues de la prueba
// describe('Grupo de Pruebas', function () {
//   before(function () {
//     cy.log('Cargamos datos Antes del suite de casos')
//   })
//   after(function () {
//     cy.log('Ejecutamos las acciones a realizar al terminar el ')
//   })
//   beforeEach(function () {
//     cy.visit('http://logofree.esy.es/');
//   })
//   afterEach(function () {
//     cy.log('Enviamos el After Each de Prueba');
//   })

//   it('Prueba 1', function () {
//     cy.contains('Checkbox').click();
//     cy.get(':nth-child(2) > input').check();
//   })
// })

//Test to select an option from a deployable menu
// describe('Grupo de Pruebas', function () {
//   before(function () {
//     cy.log('Cargamos datos Antes del suite de casos')
//   })
//   after(function () {
//     cy.log('Ejecutamos las acciones a realizar al terminar el ')
//   })
//   beforeEach(function () {
//     cy.visit('http://logofree.esy.es/');
//   })
//   afterEach(function () {
//     cy.log('Enviamos el After Each de Prueba');
//   })
//   it('Prueba 1', function () {
//     cy.contains('Selects').click();
//     cy.get('#cars').select('Mercedes')
//   })
// })


//Test to select one element from a group of elements with the same selector
// it('Prueba 1', function () {

//   cy.visit('http://logofree.esy.es/');

//   cy.get('.button').eq(3).click();

// })

//Assertion test
// describe('Grupo de Pruebas', function () {
//   it('Prueba 1', function () {
//     cy.visit('http://logofree.esy.es/');
//     cy.get('.beta > a').should('be.visible').and('contain', 'Automation Testing');
//   })
// })


//Fixtures test
// describe('Grupo de Pruebas', function () {
//   beforeEach(() => {
//     cy.fixture('PruebaFixtures.json').as('userData')
//   })
//   it('Prueba 1', function () {
//     cy.get('@userData').then((userData) => {
//       cy.visit(userData.url);
//       cy.get('#woocommerce-product-search-field-0').type(userData.producto);
//       cy.get('#woocommerce-product-search-field-0').type('{enter}')
//     }
//     )
//   })
// })

// //Actualizar fixture inline
// describe('Grupo de Pruebas', function () {
//   beforeEach(() => {
//     cy.fixture('PruebaFixtures.json').as('userData')
//   })
//   it('Prueba 1', function () {
//     cy.get('@userData').then((userData) => {
//       data.producto = 'productoActualizado'
//     })
//   })
// })


// describe('prueba usando Cypress testing library', function(){
//   it('Prueba usando la función fund by text', function(){
//     cy.visit('http://logofree.esy.es/');
//     cy.findByText('Automation Testing').should('exist')

//   })
// })

// //Test with personalised command
// describe('Grupo de Pruebas', function () {
//   beforeEach(() => {
//     cy.fixture('PruebaFixtures.json').as('userData')
//   })
//   it('Prueba 1', function () {
//     cy.get('@userData').then((userData) => {
//       cy.user(userData.username)
//       cy.login(userData.correo)
//       //cy.screenshot();
//     }
//     )
//   })
// })

// describe('Grupo de Pruebas', function () {
//   it('Prueba 1', function () {
//     cy.visit('http://logofree.esy.es/');

//     cy.get('[placeholder="Buscar …"]')
//     cy.get('[placeholder="Buscar …"]').type("Escribo sobre el elemento")
//     cy.get('[placeholder="Buscar …"]').clear(); //Limpio la barra de búsqueda
//   })
// })

// describe('Grupo de Pruebas', function () {
//   it('Prueba 1', function () {
//     cy.visit('http://logofree.esy.es/');

//     cy.get('[placeholder="Buscar …"]').type("Escribo sobre el elemento").clear();
    
//   })
// })

// //Cypress Asincrono
// describe('Cypress Asincrono', function(){
//   it('Asincronia', function(){
//     cy.visit('https://example.cypress.io/commands/actions');
//     cy.findByPlaceholderText('Email').type('test@email.com');
//     cy.wait(2000).then(()=>{
//       console.log('Test is finished');
//     })
//   })
// })

// describe('Cypress sincronico con .then', function(){
//   it('Sinconia', function(){
//     cy.visit('https://example.cypress.io/commands/actions');
//     cy.findByPlaceholderText('Email').type('test@email.com');
//     cy.wait(2000).then(()=>{
//       fetch('https://api.spacexdata.com/v3/missions')
//       .then((res)=>res.json())
//       .then((data)=>{
//         console.log(data)
//       })
//     })
//   })
// })


// //Positive assertion
// describe('Positive Asertions Example', function(){
//   it('shows an active class for the current page', ()=>{
//     cy.visit('https://example.cypress.io/commands/actions');
//     cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
//   })
// })


// //Negative assertion
// describe('Negative Assertion Example', function(){
//   it('should not have an active class on inactive pages', ()=>{
//     cy.visit('https://example.cypress.io/commands/actions');
//     cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
//   })
// })

//
describe('Test Using the UI', function(){
  it('Link to the actions page correctly',()=>{
    cy.visit('https://example.cypress.io/commands/actions');
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', 'commands/actions')
  })
})






